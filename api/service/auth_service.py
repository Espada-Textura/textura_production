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

            # user_model = dao.add(user)

            # user_json = dao.jsonify(UserSchema, user_model)

            # notification = EmailSender(
            #     to=[user_model.email], subject="Verifying Textura account"
            # )

            print("new user")

        return {}
