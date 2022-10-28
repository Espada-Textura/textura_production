from sqlalchemy import String, Integer, Column, DateTime, func

from .base_model import BaseModel


class TexturaModel(BaseModel):
    name = Column(String(128), nullable=False)
    description = Column(String(250))
