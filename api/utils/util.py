from pathlib import Path
from random import randint
from passlib.hash import sha256_crypt


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
