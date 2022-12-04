from datetime import datetime
import shortuuid

from flask import abort

from model import ArtModel
from .base_dao import BaseDAO


class ArtDao(BaseDAO):
    def __init__(self, close_on_exit=False):
        super().__init__(model=ArtModel, close_on_exit=close_on_exit)

    def add(self, schema, commit=True):
        """Add new user to database
        param   schema    UserScheam  the user schema loaded object
        return  user        UserModel   the user model object
        """

        art = self._model(schema)

        self._session.add(art)

        self._session.flush()

        art.aid = shortuuid.uuid("A" + str(art.id))

        self._session.flush()

        if commit:
            self._session.commit()

        return art
