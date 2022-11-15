# builtin imports
from datetime import datetime

# thirt-party imports
from sqlalchemy import Column, Integer, String, ForeignKey
from sqlalchemy.orm import relationship
from passlib.hash import sha256_crypt
from json import loads, dumps, JSONDecodeError


# local imports
from app import Based
from app.database import session
from .base_model import BaseModel
from utils import safe_execute


class UserModel(Based, BaseModel):
    __tablename__ = "user"

    uid = Column("uid", String(32), unique=True, index=True)
    username = Column("username", String(64), unique=True, index=True)
    email = Column("email", String(64), unique=True, index=True)
    __password = Column("password", String(128), nullable=False)
    type = Column("type", String(16), nullable=False)
    first_name = Column(String(64))
    last_name = Column(String(64))

    metas = relationship(
        "UserMetaModel",
        cascade="all,delete",
        backref="user",
    )

    def __init__(self, schema):
        for key, value in schema.items():
            if key not in ("password"):
                setattr(self, key, value)

    def set_password(self, password):
        """Set current user password
        param: password Str String password min 8 charactor long
        return: void
        """
        self.__password = sha256_crypt.encrypt(password)

    def verify_password(self, password):
        """Verify user password
        param: hashpw password Str String password min 8 charactor long
        param: new_password Str String password min 8 charactor long
        return: Flas or True
        """

        return sha256_crypt.verify(password, self.__password)

    @property
    def activated(self):
        meta = self.get_meta(key="activated")
        return meta

    @activated.setter
    def activated(self, activated):
        self.update_meta("activated", activated)

    def activate(self):
        if not self.activated:
            self.update_meta("activated", True)
            self.update_meta(
                "activated_date", datetime.now().strftime("%Y:%m:%d %H:%M:%S")
            )

    def get_meta(self, key=None, jsonify=True, user_id=None):
        """Get User Meta"""
        metas = self.metas
        meta = None
        for _meta in metas:
            if _meta.key == key:
                meta = _meta
                break
            else:
                meta = None

        if not meta:
            return None

        return (
            safe_execute(meta.value, safe_execute, loads, meta.value)
            if jsonify
            else meta.value
        )

    def update_meta(self, key, value, jsonify=True):
        """Update user meta
        param           key             String
        param           value           String
        return          user_meta           Object
        """
        meta = (
            session.query(UserMetaModel)
            .filter(UserMetaModel.user_id == self.id)
            .filter(UserMetaModel.key == key)
            .one_or_none()
        )
        str_value = (
            value
            if isinstance(value, str)
            else safe_execute(value, JSONDecodeError, dumps, value)
        )

        if isinstance(meta, UserMetaModel):
            meta.value = str_value
        else:
            meta = UserMetaModel(self.id, key, str_value)
            session.add(meta)
        session.commit()
        return (
            safe_execute(meta.value, JSONDecodeError, loads, meta.value)
            if jsonify
            else meta.value
        )


class UserMetaModel(Based, BaseModel):
    __tablename__ = "user_meta"

    value = Column(String(), nullable=False)
    key = Column(String(64), nullable=False)
    user_id = Column(Integer, ForeignKey("user.id"), index=True, nullable=False)

    def __init__(self, user_id, key, value):
        self.user_id = user_id
        self.key = key
        self.value = value
