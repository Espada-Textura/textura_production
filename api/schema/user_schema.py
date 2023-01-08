from marshmallow import fields, validate

from .mixin import Mixin, NestedSchema


class UserSchema(Mixin):
    uid = fields.Str()
    avatar = fields.Str(required=False, dump_only=True)
    username = fields.Str(required=False)
    email = fields.Email(required=True)
    password = fields.Str(
        required=True, validate=validate.Length(min=8, max=128), load_only=True
    )
    first_name = fields.Str(required=True)
    last_name = fields.Str(required=True)


class UserAuthSchema(Mixin):
    uid = fields.Str()
    avatar = fields.Str(required=False, dump_only=True)
    username = fields.Str(required=False)
    email = fields.Email(required=True)
    password = fields.Str(
        required=True, validate=validate.Length(min=8, max=128), load_only=True
    )
    first_name = fields.Str(required=True)
    last_name = fields.Str(required=True)
    otp = fields.Str(validate=validate.Length(min=6, max=6), load_only=True)
    token = fields.Str(validate=validate.Length(min=6, max=128), load_only=True)


class UserPasswordSchema(Mixin):
    password = fields.Str(
        required=True, validate=validate.Length(min=8, max=128), load_only=True
    )
    new_password = fields.Str(
        required=True, validate=validate.Length(min=8, max=128), load_only=True
    )


class UserActivateSchema(Mixin):
    email = fields.Email(required=True)
    otp = fields.Str(validate=validate.Length(min=6, max=6), load_only=True)


class NestedUserSchema(NestedSchema):
    users = fields.Nested(UserSchema, attribute="items", many=True)
