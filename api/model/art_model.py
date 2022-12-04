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


class ArtModel(Based, BaseModel):
    __tablename__ = "art"

    aid = Column("aid", String(32), unique=True, index=True)
    title = Column("title", String(), index=True)
    description = Column("description", String())
    rpath = Column("rpath", String())
    status = Column("status", String(), default="processing")
    preimage = Column("preimage", String())
    view = Column("view", Integer(), default=0)
    like = Column("like", Integer(), default=0)

    user_id = Column(Integer, ForeignKey("user.id"), index=True, nullable=False)

    user = relationship(
        "UserModel",
        backref="user",
    )

    metas = relationship(
        "ArtMetaModel",
        cascade="all,delete",
        backref="art",
    )

    def __init__(self, schema):
        for key, value in schema.items():
            if key not in ("image"):
                setattr(self, key, value)

    def get_meta(self, key=None, jsonify=True, art_id=None):
        """Get Art Meta"""
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
        """Update Art Meta
        param           key             String
        param           value           String
        return          art_meta           Object
        """
        meta = (
            session.query(ArtMetaModel)
            .filter(ArtMetaModel.art_id == self.id)
            .filter(ArtMetaModel.key == key)
            .one_or_none()
        )
        str_value = (
            value
            if isinstance(value, str)
            else safe_execute(value, JSONDecodeError, dumps, value)
        )

        if isinstance(meta, ArtMetaModel):
            meta.value = str_value
        else:
            meta = ArtMetaModel(self.id, key, str_value)
            session.add(meta)
        session.commit()
        return (
            safe_execute(meta.value, JSONDecodeError, loads, meta.value)
            if jsonify
            else meta.value
        )


class ArtMetaModel(Based, BaseModel):
    __tablename__ = "art_meta"

    value = Column(String(), nullable=False)
    key = Column(String(64), nullable=False)
    art_id = Column(Integer, ForeignKey("art.id"), index=True, nullable=False)

    def __init__(self, art_id, key, value):
        self.art_id = art_id
        self.key = key
        self.value = value
