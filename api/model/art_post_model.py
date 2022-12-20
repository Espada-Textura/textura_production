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


class ArtPostModel(Based, BaseModel):
    __tablename__ = "art_post"

    pid = Column("pid", String(32), unique=True, index=True)
    title = Column("title", String(), index=True)
    description = Column("description", String())
    status = Column("status", String(), default="processing")
    view = Column("view", Integer(), default=0)
    like = Column("like", Integer(), default=0)

    user_id = Column(Integer, ForeignKey("user.id"), index=True, nullable=False)

    user = relationship(
        "UserModel",
        backref="art_post",
    )

    arts = relationship(
        "ArtModel",
        cascade="all,delete",
        backref="art_post",
    )

    metas = relationship(
        "ArtPostMetaModel",
        cascade="all,delete",
        backref="art_post",
    )

    def __init__(self, schema):
        for key, value in schema.items():
            if key not in ("arts"):
                if isinstance(value, dict):
                    key = f"{key}_id"
                    value = value.get("id")

                if hasattr(self, key) and getattr(self, key) != value:
                    setattr(self, key, value)

    def get_meta(self, key=None, jsonify=True, art_post_id=None):
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
            session.query(ArtPostMetaModel)
            .filter(ArtPostMetaModel.art_post_id == self.id)
            .filter(ArtPostMetaModel.key == key)
            .one_or_none()
        )
        str_value = (
            value
            if isinstance(value, str)
            else safe_execute(value, JSONDecodeError, dumps, value)
        )

        if isinstance(meta, ArtPostMetaModel):
            meta.value = str_value
        else:
            meta = ArtPostMetaModel(self.id, key, str_value)
            session.add(meta)
        session.commit()
        return (
            safe_execute(meta.value, JSONDecodeError, loads, meta.value)
            if jsonify
            else meta.value
        )


class ArtPostMetaModel(Based, BaseModel):
    __tablename__ = "art_post_meta"

    value = Column(String(), nullable=False)
    key = Column(String(64), nullable=False)
    art_post_id = Column(Integer, ForeignKey("art_post.id"), index=True, nullable=False)

    def __init__(self, art_post_id, key, value):
        self.art_post_id = art_post_id
        self.key = key
        self.value = value
