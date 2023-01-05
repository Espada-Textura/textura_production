# builtin imports
from datetime import datetime

# thirt-party imports
from sqlalchemy import Column, Integer, String, ForeignKey, Boolean
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
    description = Column("description", String())
    rpath = Column("rpath", String())
    status = Column("status", String(), default="processing")
    preimage = Column("preimage", String())
    index = Column("index", Integer(), default=0, index=True)
    view = Column("view", Integer(), default=0)
    like = Column("like", Integer(), default=0)
    is_publishing = Column("is_publishing", Boolean(), default=True)
    width = Column("width", Integer(), default=0)
    height = Column("height", Integer(), default=0)
    twidth = Column("twidth", Integer(), default=0)
    theight = Column("theight", Integer(), default=0)

    art_post_id = Column(Integer, ForeignKey("art_post.id"), index=True, nullable=False)

    def __init__(self, schema):
        for key, value in schema.items():
            if key not in ("image"):
                setattr(self, key, value)

    def get_spath(self):
        rpath = self.rpath
        return f"{rpath.split('.')[0]}_thumbnail.{rpath.split('.')[1]}"
