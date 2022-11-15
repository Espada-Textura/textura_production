from datetime import datetime
import shortuuid

from flask import abort

from model import UserModel
from .base_dao import BaseDAO


class UserDao(BaseDAO):
    def __init__(self, close_on_exit=False):
        super().__init__(model=UserModel, close_on_exit=close_on_exit)

    def get_by_email(self, schema):
        """Get user by email
        param   schema    UserScheam  the user schema loaded object
        return  user      UserModel   the user model object
        """

        if not schema.get("email"):
            return None

        query = self._query.filter(self._model.email == schema.get("email"))

        user = query.one_or_none()

        return user

    def add(self, schema, commit=True):
        """Add new user to database
        param   schema    UserScheam  the user schema loaded object
        return  user        UserModel   the user model object
        """

        user = self._model(schema)

        user.set_password(schema.get("password"))

        user.type = "normal"

        self._session.add(user)

        self._session.flush()

        user.uid = shortuuid.uuid(str(user.id))

        self._session.flush()

        if commit:
            self._session.commit()

        return user

    def update(self, schema):

        user = self.get(schema.get("id"))

        for key, value in schema.items():
            if key in (
                "first_name",
                "last_name",
                "company",
                "consolidation",
                "phone_number",
            ):
                setattr(user, key, value)

        user.set_username(schema.get("username"))

        user.set_email(schema.get("email"))

        return user

    def add_admin(self, user):
        """Add admin user
        param   super_admin     the valid user object
        return  True
        """

        new_user = self.add(user)
        new_user.set_type("admin")

        return new_user
