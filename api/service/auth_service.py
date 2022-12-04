from flask import abort, make_response
from flask_jwt_extended import (
    create_access_token,
    create_refresh_token,
    set_refresh_cookies,
    set_access_cookies,
    unset_jwt_cookies,
)

from dao import UserDao
from schema import UserSchema


class AuthService:
    def login(self, user=None):
        """
        Login
        param   schema      UserScheam  user json
        return  user        UserScheam  user json
        """

        with UserDao() as dao:

            user_model = dao.get_by_email(user)

            if not user_model:
                abort(404)

            if not user_model.activated:
                abort(403)

            if not user_model.verify_password(user.get("password")):
                abort(403)

            user_json = dao.jsonify(UserSchema, user_model)

        return user_json

    def sign_up(self, user=None):
        """
        Sign up
        param   schema      UserScheam  user json
        return  user        UserScheam  user json
        """

        with UserDao() as dao:

            user_model = dao.add(user)

            user_json = dao.jsonify(UserSchema, user_model)

        return user_json

    def activate(self, user=None):

        with UserDao() as dao:

            user_model = dao.get_by_email(user)

            if not user_model:
                abort(404)

            if user_model.activated:
                abort(403)

            user_model.activate()

            user_json = dao.jsonify(UserSchema, user_model)

        return user_json

    def resent_otp(self, user=None):

        with UserDao() as dao:

            user_model = dao.get_by_email(user)

            if not user_model:
                abort(404)

            if user_model.activated:
                abort(403)

            user_json = dao.jsonify(UserSchema, user_model)

        return user_json

    def get_user_by_email(self, user):

        with UserDao() as dao:

            user_model = dao.get_by_email(user)

            if not user_model:
                abort(404)

            user_json = dao.jsonify(UserSchema, user_model)

        return user_json

    def reset_password(self, user):

        with UserDao() as dao:

            user_model = dao.get_by_email(user)

            if not user_model:
                abort(404)

            user_model.set_password(user.get("password"))

            user_json = dao.jsonify(UserSchema, user_model)

        return user_json
