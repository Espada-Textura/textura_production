from datetime import datetime
import shortuuid
from multiprocessing.dummy import Pool

from flask import Blueprint, make_response, abort, session, request
from flask_jwt_extended import jwt_required

from flask_jwt_extended import (
    create_access_token,
    create_refresh_token,
    set_refresh_cookies,
    set_access_cookies,
    unset_jwt_cookies,
)

from dao import UserDao
from utils import (
    validate_request,
    get_otp_code,
    get_hash,
    EmailSender,
    get_current_user,
    verify_otp,
    get_remote_location,
)
from service import AuthService


auth_route = Blueprint("auth_route", __name__, url_prefix="/api")


@auth_route.route("/login", methods=["POST"])
@validate_request(
    "UserAuthSchema", partial=True, only=("email", "password", "username")
)
def user_login(user_auth):

    service = AuthService()
    resp = None

    user_json = service.login(user=user_auth)

    access_token = create_access_token(user_json.get("id"), additional_claims=user_json)

    refresh_token = create_refresh_token(
        user_json.get("id"), additional_claims=user_json
    )

    user_json.update({"accessToken": access_token, "refreshToken": refresh_token})

    resp = make_response(user_json, 200)

    set_access_cookies(resp, access_token)
    set_refresh_cookies(resp, refresh_token)

    return resp


@auth_route.route("/signup", methods=["POST"])
@validate_request(
    "UserAuthSchema", only=("email", "password", "first_name", "last_name")
)
def user_signup(user_auth):

    service = AuthService()
    new_user_json = service.sign_up(user=user_auth)

    otp_code = get_otp_code()

    session["user"] = {
        "id": new_user_json.get("id"),
        "hashed_otp": get_hash(otp_code),
        "created": datetime.now(),
    }

    notification = EmailSender(
        to=[new_user_json.get("email")],
        subject="Verifying Textura account",
        message=f"Your OTP code is {otp_code}",
        template="login_template",
        temp_conts={
            "otp_code": otp_code,
            "client_info": f"""
            Request from:
                IP : {request.remote_addr}
                Agent : {request.environ.get("HTTP_USER_AGENT")}
            """,
        },
    )

    notification.emit_send()

    return make_response(new_user_json, 200)


@auth_route.route("/activate", methods=["POST"])
@validate_request("UserActivateSchema", partial=True)
def user_verify(user_activate):

    if not session.get("user"):
        abort(403)

    hashed_otp = session.get("user").get("hashed_otp")

    req_otp = user_activate.get("otp")

    if verify_otp(otp=req_otp, hashed_otp=hashed_otp):

        service = AuthService()

        user_json = service.activate(user=user_activate)

        notification = EmailSender(
            to=[user_json.get("email")],
            subject="Textura account",
            message="Your account has been activated.",
            template="user_activate_template",
            temp_conts={
                "client_info": f"""
            Request from:
                IP : {request.remote_addr}
                Agent : {request.environ.get("HTTP_USER_AGENT")}
            """,
            },
        )

        notification.emit_send()

        session.pop("user")

    else:

        abort(403)

    return make_response({"message": "Activated"})


@auth_route.route("/resend", methods=["POST"])
@validate_request("UserAuthSchema", only=(["email"]))
def user_resend_otp(user_auth):

    service = AuthService()
    user_json = service.resent_otp(user=user_auth)

    otp_code = get_otp_code()

    session["user"] = {
        "id": user_json.get("id"),
        "hashed_otp": get_hash(otp_code),
        "created": datetime.now(),
    }

    notification = EmailSender(
        to=[user_json.get("email")],
        subject="Verifying Textura account",
        message=f"Hey Your OTP code is {otp_code}",
        template="otp_template",
        temp_conts={
            "otp_code": otp_code,
            "client_info": f"""
            Request from:
                IP : {request.remote_addr}
                Agent : {request.environ.get("HTTP_USER_AGENT")}
            """,
        },
    )
    notification.emit_send()

    return make_response({"message": "Resent"})


@auth_route.route("/reset-password/<step>", methods=["PUT"])
@validate_request(
    "UserAuthSchema", partial=True, only=(["email", "otp", "uid", "token", "password"])
)
def user_reset_password(user_auth, step):

    step = str(step)

    if step == "request":

        service = AuthService()

        user_json = service.get_user_by_email(user_auth)

        otp_code = get_otp_code()

        session["reseting_password"] = {
            "uid": user_json.get("uid"),
            "hashed_otp": get_hash(otp_code),
            "created": datetime.now(),
        }

        notification = EmailSender(
            to=[user_json.get("email")],
            subject="Reset Textura account password",
            message=f"Your OTP code is {otp_code}",
            template="otp_template",
            temp_conts={
                "otp_code": otp_code,
                "client_info": f"""
            Request from:
                IP : {request.remote_addr}
                Agent : {request.environ.get("HTTP_USER_AGENT")}
            """,
            },
        )

        notification.emit_send()

        resp = {
            "email": user_json.get("email"),
            "uid": user_json.get("uid"),
        }

        return make_response(resp)

    elif step == "verify":

        session_value = session.get("reseting_password")

        if not session_value:
            abort(403)

        req_otp = user_auth.get("otp")

        req_uid = user_auth.get("uid")

        if not verify_otp(otp=req_otp, hashed_otp=session_value.get("hashed_otp")):
            abort(403)

        if not req_uid == session_value.get("uid"):
            abort(403)

        service = AuthService()

        user_json = service.get_user_by_email(user_auth)

        c_otp_code = str(shortuuid.uuid() + shortuuid.uuid())

        session["reseting_password"] = {
            "uid": user_json.get("uid"),
            "hashed_token": get_hash(c_otp_code),
            "created": datetime.now(),
        }

        resp = {
            "email": user_json.get("email"),
            "uid": user_json.get("uid"),
            "token": c_otp_code,
        }

        return make_response(resp)

    elif step == "new":

        session_value = session.get("reseting_password")

        if not session_value:
            abort(403)

        req_token = user_auth.get("token")

        rep_uid = user_auth.get("uid")

        if not rep_uid == session_value.get("uid"):
            abort(403)

        if not verify_otp(otp=req_token, hashed_otp=session_value.get("hashed_token")):
            abort(403)

        service = AuthService()

        user_json = service.reset_password(user_auth)

        notification = EmailSender(
            to=[user_json.get("email")],
            subject="Textura Account",
            message="Your account password have been changed.",
            template="content_template",
            temp_conts={
                "content": "Your account password have been changed.",
                "client_info": f"""
            Request from:
                IP : {request.remote_addr}
                Agent : {request.environ.get("HTTP_USER_AGENT")}
            """,
            },
        )

        notification.emit_send()

        return make_response({"message": "Password has been changed"})

    else:
        abort(403)


@auth_route.route("/logout", methods=["POST"])
@jwt_required()
def user_logout():
    resp = make_response({"message": "Logout successful"})
    unset_jwt_cookies(resp)
    return resp


@auth_route.route("/debug", methods=["GET"])
def debug():

    client_ip = request.environ.get("REMOTE_ADDR")

    # resp = get_remote_location(client_ip)

    print(request.access_route)

    resp = make_response({})
    return resp
