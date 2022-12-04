from pathlib import Path
from random import randint
from passlib.hash import sha256_crypt
import requests
import json


from flask_jwt_extended import verify_jwt_in_request, get_jwt


def get_project_root() -> Path:
    return Path(__file__).parent.parent


def get_otp_code(length=6):
    """Generate 8 digits string charactors
    param   length  Integer The length of the string to be generated
    return  opt     The strign digits of opt
    """

    range_start = 10 ** (length - 1)
    range_end = (10**length) - 1
    opt = randint(range_start, range_end)
    return str(opt)


def get_hash(password: str):
    """Generat string hashed password
    param   password    String  The string password to be hashed
    return  password    String  The string hashed password
    """

    return sha256_crypt.encrypt(password)


def verify_otp(otp="", hashed_otp=""):
    """Verify otp"""

    return sha256_crypt.verify(otp, hashed_otp)


def safe_execute(default, exception, function, *args):
    """safe execute inline function
    param   default     Any         the default return value
    param   exception   Exeception  the exception class to be catch
    param   function    Function    the function to be execute
    param   args        Any         the args that will pass to function when call
    return  Any
    """
    try:
        return function(*args)
    except exception:
        return default


def get_current_user():
    """get current user id from jwt token"""
    claims = get_jwt()
    return claims


def get_remote_location(ip=None):
    location = ""

    url = f"http://ip-api.com/json/{ip}"
    resp = requests.get(url)

    print(resp)

    if not resp:
        location = "Unknown IP location"

    location = json.loads(resp.text)

    return location
