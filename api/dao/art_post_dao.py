from datetime import datetime
import shortuuid

from flask import abort

from model import ArtPostModel
from .base_dao import BaseDAO


class ArtPostDao(BaseDAO):
    def __init__(self, close_on_exit=False):
        super().__init__(model=ArtPostModel, close_on_exit=close_on_exit)

    def add(self, schema, commit=True):
        """Add new post to database
        param   schema    UserScheam  the user schema loaded object
        """

        art_post = self._model(schema)

        self._session.add(art_post)

        self._session.flush()

        art_post.pid = shortuuid.uuid("P" + str(art_post.id))

        self._session.flush()

        if commit:
            self._session.commit()

        return art_post

    def get_by_pid(self, pid):
        """Get row by pid"""

        query = self._query.filter(self._model.pid == pid)
        return query.one_or_none()
