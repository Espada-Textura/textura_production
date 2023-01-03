from marshmallow import fields, validate, Schema, pre_load, post_dump
from flask import request

from .mixin import Mixin, NestedSchema
from .user_schema import UserSchema


class ImageJsonSchema(Schema):
    mime = fields.Str()
    data = fields.Str()


class ArtSchema(Mixin):
    aid = fields.Str()
    description = fields.Str(required=False)
    rpath = fields.Str(required=False, dump_only=True)
    status = fields.Str(
        required=False,
        dump_only=True,
        validate=validate.OneOf(["processing", "completed", "failed"]),
    )
    preimage = fields.Str(required=False, dump_only=True)
    index = fields.Int(required=False)
    width = fields.Int(required=False, dump_only=True)
    height = fields.Int(required=False, dump_only=True)
    # is_publishing = fields.Bool(required=False, dump_only=True)

    image = fields.Nested(ImageJsonSchema, load_only=True, required=True)

    @post_dump
    def set_full_path(self, data, **kwargs):

        if not data.get("rpath"):
            return data

        r_full_path = f"https://{request.headers['Host']}{data.get('rpath')}"
        t_full_path = f"https://{request.headers['Host']}{data.get('rpath').split('.')[0]}_thumbnail.{data.get('rpath').split('.')[1]}"

        data.update({"rpath": r_full_path})
        data.update({"tpath": t_full_path})

        return data


class NestedArtSchema(NestedSchema):
    arts = fields.Nested(ArtSchema, attribute="items", exclude=[], many=True)
