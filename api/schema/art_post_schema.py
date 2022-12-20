from marshmallow import fields, validate, Schema, pre_load, post_dump
from flask import request

from .mixin import Mixin, NestedSchema
from .user_schema import UserSchema
from .art_schema import ArtSchema, NestedArtSchema


class ImageJsonSchema(Schema):
    mime = fields.Str()
    data = fields.Str()


class ArtPostSchema(Mixin):
    pid = fields.Str()
    title = fields.Str(required=False)
    description = fields.Str(required=False, allow_none=True)
    status = fields.Str(
        required=False,
        dump_only=True,
        validate=validate.OneOf(["processing", "completed", "failed"]),
    )
    view = fields.Int(required=False, dump_only=True)
    like = fields.Int(required=False, dump_only=True)

    user = fields.Nested(UserSchema, dump_only=True)
    arts = fields.Nested(ArtSchema, many=True)

    @post_dump
    def add_meta_data(self, data, **kwargs):

        data.update({"imageCount": len(data.get("arts"))})

        return data


class NestedArtPostSchema(NestedSchema):
    art_posts = fields.Nested(ArtPostSchema, attribute="items", many=True)
