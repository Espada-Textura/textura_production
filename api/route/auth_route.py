from datetime import datetime
import asyncio
from multiprocessing.dummy import Pool

from flask import Blueprint, make_response, abort, session
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

    resp = make_response(user_json, 200)

    access_token = create_access_token(user_json.get("id"), additional_claims=user_json)

    refresh_token = create_refresh_token(
        user_json.get("id"), additional_claims=user_json
    )

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
    )

    notification.send_email()

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
        )

        notification.send_email()

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
    )
    notification.send_email()

    return make_response({"message": "Resent"})


@auth_route.route("/logout", methods=["POST"])
@jwt_required()
def user_logout():
    resp = make_response({"message": "Logout successful"})
    unset_jwt_cookies(resp)
    return resp
