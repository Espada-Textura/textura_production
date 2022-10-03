from flask import Blueprint, make_response, abort
from app import db
from models import UserModel

auth_route = Blueprint("auth_route", __name__, url_prefix="/api")



@auth_route.route("/migrate", methods=["GET"])
def index(user_id=0):
    user = UserModel("hello","hello")
    db.create_all() 

    return "Done"


@auth_route.route("/arts", methods=["GET"])
def arts():
    return {"name": "hello"}


# @auth_route.route("/login", methods=["POST"])
# @validate_request("UserSchema", partial=True, only=("email", "password", "username"))
# def user_login(user):

#     with UserDao() as dao:

#         _user = dao.get_query(
#             **{
#                 f"_UserModel__{key}": value
#                 for key, value in user.items()
#                 if key != "password"
#             }
#         ).one()

#     if not _user.verify_password(user.get("password")):
#         abort(403)

#     user_json = dao.jsonify(UserSchema, _user)

#     access_token = create_access_token(user_json.get("id"), additional_claims=user_json)

#     refresh_token = create_refresh_token(
#         user_json.get("id"), additional_claims=user_json
#     )

#     resp = make_response(user_json, 200)

#     set_access_cookies(resp, access_token)
#     set_refresh_cookies(resp, refresh_token)

#     return resp
