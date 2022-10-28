# pylint: disable=W0613
from stringcase import camelcase, snakecase
from marshmallow import pre_load, post_dump, fields, Schema, EXCLUDE


class JsMixin(Schema):
    class Meta:
        unknown = EXCLUDE

    @pre_load
    def to_snakecase(self, data, **kwargs):
        """Convert object key from camelCase to snake_case"""

        for field in data:
            if data[str(field)] == "":
                data[str(field)] = None

        return {
            snakecase(key): None if value == "" else value
            for key, value in data.items()
        }

    @post_dump
    def to_camelcase(self, data, **kwargs):
        """Convert object key from snake_case to camelCase"""

        for field in data:
            if data[field] is None:
                data[field] = ""

        return {
            camelcase(key): str(value) if value is None else value
            for key, value in data.items()
        }


class Mixin(JsMixin):

    id = fields.Int()
    created_date = fields.DateTime("%d-%m-%Y %H:%M", dump_only=True)
    updated_date = fields.DateTime("%d-%m-%Y %H:%M", dump_only=True)


class NestedSchema(Mixin):
    page = fields.Int()
    per_page = fields.Int()
    total_records = fields.Int()
    total_pages = fields.Int()
