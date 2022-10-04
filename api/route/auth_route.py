from flask import Blueprint, make_response, abort
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
from utils import validate_request

auth_route = Blueprint("auth_route", __name__, url_prefix="/api")


@auth_route.route("/login", methods=["POST"])
@validate_request("UserSchema", partial=True, only=("email", "password", "username"))
def user_login(user):

    with UserDao() as dao:

        _user = dao.get_query(
            **{
                f"_UserModel__{key}": value
                for key, value in user.items()
                if key != "password"
            }
        ).one()

    if not _user.verify_password(user.get("password")):
        abort(403)

    user_json = dao.jsonify(UserSchema, _user)

    access_token = create_access_token(user_json.get("id"), additional_claims=user_json)

    refresh_token = create_refresh_token(
        user_json.get("id"), additional_claims=user_json
    )

    resp = make_response(user_json, 200)

    set_access_cookies(resp, access_token)
    set_refresh_cookies(resp, refresh_token)

    return resp


@auth_route.route("/logout", methods=["POST"])
@jwt_required()
def user_logout():
    resp = make_response({"message": "Logout successful"})
    unset_jwt_cookies(resp)
    return resp
