# builtin imports

# thirt-party imports
from sqlalchemy import Column, String
from passlib.hash import sha256_crypt

# local imports
from app import Based

from .base_model import BaseModel


class UserModel(Based, BaseModel):
    __tablename__ = "user"

    __username = Column("username", String(64), unique=True, index=True)
    __email = Column("email", String(64), unique=True, index=True)
    __password = Column("password", String(128), nullable=False)
    __type = Column("type", String(16), nullable=False)
    first_name = Column(String(64))
    last_name = Column(String(64))
    phone_number = Column("phone_number", String(12), unique=True, nullable=True)
    consolidation = Column(String(3), default="no")
    company = Column(String(128))

    def __init__(self, schema):
        for key, value in schema.items():
            if key not in ("email", "username", "password"):
                setattr(self, key, value)

    @property
    def email(self):
        return self.__email

    def set_email(self, email):
        """email setter"""
        self.__email = email

    @property
    def username(self):
        return self.__username

    def set_username(self, username):
        """phone setter"""
        self.__username = username

    @property
    def type(self):
        return self.__type

    @type.setter
    def type(self):
        pass

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

    def set_type(self, type="customer"):
        """Type attribute setter"""
        self.__type = type
