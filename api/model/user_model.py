# builtin imports

# thirt-party imports
from sqlalchemy import Column, String
from passlib.hash import sha256_crypt

# local imports
from app import Based

from .base_model import BaseModel


class UserModel(Based, BaseModel):
    __tablename__ = "user"

    uid = Column("uid", String(32), unique=True, index=True)
    username = Column("username", String(64), unique=True, index=True)
    email = Column("email", String(64), unique=True, index=True)
    __password = Column("password", String(128), nullable=False)
    type = Column("type", String(16), nullable=False)
    first_name = Column(String(64))
    last_name = Column(String(64))

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
