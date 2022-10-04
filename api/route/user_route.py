from flask import Blueprint, make_response, abort
from flask_jwt_extended import jwt_required

from schema import UserSchema, NestedUserSchema
from dao import UserDao
from utils import validate_request, validate_params

user_route = Blueprint("user_route", __name__, url_prefix="/api")


@user_route.route("/users", methods=["GET"])
@jwt_required()
@validate_params("UserSchema")
def user_view(expression=None, pagination=None):
    with UserDao() as dao:

        users = dao.get_all(expression=expression, pagination=pagination)

        users_json = dao.jsonify(
            NestedUserSchema if hasattr(users, "items") else UserSchema,
            users,
            many=True,
        )

        return make_response(users_json, 200)


@user_route.route("/users", methods=["POST"])
@jwt_required()
@validate_request("UserSchema")
def user_add(user=None):

    with UserDao() as dao:

        user = dao.add(user)

        user_json = dao.jsonify(UserSchema, user)

    return make_response(user_json, 200)


@user_route.route("/users", methods=["PUT"])
@jwt_required()
@validate_request("UserSchema", exclude=("password",))
def user_edit(user=None):

    with UserDao() as dao:

        user = dao.update(user)

        user_json = dao.jsonify(UserSchema, user)

    return make_response(user_json, 200)


@user_route.route("/users", methods=["PATCH"])
@jwt_required()
@validate_request("UserPasswordSchema", only=("id", "password", "new_password"))
def user_password_edit(user_password=None):

    with UserDao() as dao:

        user = dao.get(user_password.get("id"))

        if not user:
            abort(400)

        if not user.verify_password(user_password.get("password")):
            abort(403)

        user.set_password(user_password.get("new_password"))

        dao.commit()

        user_json = dao.jsonify(UserSchema, user)

    return make_response(user_json, 200)
