from functools import wraps

from flask import request, abort

from stringcase import snakecase

from marshmallow.exceptions import ValidationError
from flask_jwt_extended import verify_jwt_in_request, get_jwt

from schema import *

from .logger import Logger


def logger(name="IAM", filename="errors.log"):
    """instantiate new log class
    param   name        String  string log name
    param   filename    String  log filename
    return  Logger      Logger  Logger class
    """
    return Logger(name).get_logger(filename)


def validate_request(*schemas, partial=False, **options):
    """Custom decorator for validating request based on provided schemas
    param   schemas     String      string mashmallow schema class name
    param   options     Object      Mashmallow kwards options
    return decorator    Function    decorated function
    """

    def decorated(function):
        @wraps(function)
        def wrapper(*args, **kwargs):

            if not request.is_json:
                logger().error(
                    "%s %s - %s is not allowed",
                    request.method,
                    request.path,
                    request.content_type.split(";")[0]
                    if request.content_type
                    else "None content type",
                )
                abort(400)

            if not schemas:
                return function(*args, **kwargs)

            schema_objects = {}

            try:
                for klass in schemas:
                    if klass in globals().keys():
                        schema = globals()[klass]
                        value = schema(**options).load(
                            request.get_json(), partial=partial
                        )

                        schema_objects.update(
                            {snakecase(klass).replace("_schema", ""): value}
                        )

            except ValidationError as e:
                _logger = logger("IAM")
                _logger.error("%s %s - %s", request.method, request.path, e)
                abort(400)

            return function(*args, **kwargs, **schema_objects)

        return wrapper

    return decorated


def validate_params(_schema):
    """validate param
    param   _schema     String      string mashmallow schema class name
    return  decorator   Function    decorated function
    """

    def decorator(function):
        @wraps(function)
        def wrapper(*args, **kwargs):

            try:
                schema = globals().get(_schema)
            except ValidationError:
                abort(400)

            _args = request.args.to_dict()
            params = {
                "expression": schema().load(_args, partial=True),
                "pagination": {
                    snakecase(key): int(value)
                    for key, value in _args.items()
                    if key in ("page", "perPage")
                },
            }
            return function(*args, **kwargs, **params)

        return wrapper

    return decorator


def verify_authentication(**jwt_kargs):
    """verify jwt token authentication"""

    def decorated(function):
        @wraps(function)
        def wrapper(*args, **kwargs):

            fresh = jwt_kargs.get("fresh", False)

            refresh = jwt_kargs.get("refresh", True)

            verify_jwt_in_request(fresh=fresh, refresh=refresh)

            return function(*args, **kwargs)

        return wrapper

    return decorated
