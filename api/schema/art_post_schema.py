import time
import datetime

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
    # status = fields.Str(
    #     required=False,
    #     dump_only=True,
    #     validate=validate.OneOf(["processing", "completed", "failed"]),
    # )
    view = fields.Int(required=False, dump_only=True)
    like = fields.Int(required=False, dump_only=True)
    # is_publishing = fields.Bool(required=False, dump_only=True)

    user = fields.Nested(UserSchema, dump_only=True)
    arts = fields.Nested(ArtSchema, many=True)

    @post_dump
    def add_meta_data(self, data, **kwargs):

        data.update({"imageCount": len(data.get("arts"))})

        # for (
        #     index,
        #     art,
        # ) in enumerate(data.get("arts")):
        #     if art.get("index") == 0:
        #         data.update({"arts": [data.get("arts")[index]]})
        #         break

        if data.get("created_date"):
            data.update(
                {
                    "created_date": time.mktime(
                        datetime.datetime.strptime(
                            data.get("created_date"), "%Y-%m-%d %H:%M:%S.%f"
                        ).timetuple()
                    )
                }
            )

        if data.get("updated_date"):
            data.update(
                {
                    "updated_date": time.mktime(
                        datetime.datetime.strptime(
                            data.get("updated_date"), "%Y-%m-%d %H:%M:%S.%f"
                        ).timetuple()
                    )
                }
            )

        return data


class NestedArtPostSchema(NestedSchema):
    art_posts = fields.Nested(ArtPostSchema, attribute="items", many=True)
