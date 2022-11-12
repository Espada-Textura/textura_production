from datetime import datetime

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
from schema import UserSchema
from utils import validate_request, get_otp_code, get_hash, EmailSender
from service import AuthService


auth_route = Blueprint("auth_route", __name__, url_prefix="/api")


@auth_route.route("/login", methods=["POST"])
@validate_request("UserSchema", partial=True, only=("email", "password", "username"))
def user_login(user):

    service = AuthService()
    resp = None

    user_json = service.login(user=user)

    resp = make_response(user_json, 200)

    access_token = create_access_token(user_json.get("id"), additional_claims=user_json)

    refresh_token = create_refresh_token(
        user_json.get("id"), additional_claims=user_json
    )

    set_access_cookies(resp, access_token)
    set_refresh_cookies(resp, refresh_token)

    return user_json


@auth_route.route("/signup", methods=["POST"])
@validate_request("UserSchema", only=("email", "password", "first_name", "last_name"))
def user_signup(user):

    service = AuthService()
    new_user_json = service.sign_up(user=user)

    otp_code = get_otp_code()

    session["user"] = {
        "id": new_user_json.get("id"),
        "hashed_otp": get_hash(otp_code),
        "created": datetime.now(),
    }

    notification = EmailSender(
        to=["misapisatto@gmail.com"],
        subject="Verifying Textura account",
        message=otp_code,
    )

    notification.send_email()

    return make_response(new_user_json, 200)


@auth_route.route("/activate", methods=["POST"])
@validate_request("UserSchema", partial=True, only=("email", "password", "username"))
def user_verify(user):
    print(session.get("user"))

    return make_response({}, 200)


@auth_route.route("/logout", methods=["POST"])
@jwt_required()
def user_logout():
    resp = make_response({"message": "Logout successful"})
    unset_jwt_cookies(resp)
    return resp
