from marshmallow import fields, validate

from .mixin import Mixin, NestedSchema


class UserSchema(Mixin):
    username = fields.Str(required=True)
    email = fields.Email(required=True)
    password = fields.Str(
        required=True, validate=validate.Length(min=1, max=128), load_only=True
    )
    first_name = fields.Str(required=True)
    last_name = fields.Str(required=True)
    phone_number = fields.Str(allow_none=True)
    consolidation = fields.Str(allow_none=True, default="no")
    company = fields.Str(allow_none=True)
    type = fields.Str(dumb_only=True)


class UserPasswordSchema(Mixin):
    password = fields.Str(
        required=True, validate=validate.Length(min=8, max=128), load_only=True
    )
    new_password = fields.Str(
        required=True, validate=validate.Length(min=8, max=128), load_only=True
    )


class NestedUserSchema(NestedSchema):
    users = fields.Nested(UserSchema, attribute="items", many=True)
