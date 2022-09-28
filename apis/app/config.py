import os
from datetime import timedelta

BASE_DIR = os.path.dirname(os.path.realpath(__file__))


class BaseConfig:
    DEBUG = True
    PORT = 5000
    HOST = "0.0.0.0"
    SECRET_KEY = "i3l_Y5AXQ)x7B7+S*OgjNd4-_0.+hHh?Gz?4gdyx#gRWjTFVdjw@-xZjy@Z-ij=Xc1B_yCWnmWm.mfH.?nJ8BU+egPJh:?#+kjC_!hDpU8Rva6Et+o6OSKIp5_*A#JG9"

    SQLALCHEMY_DATABASE_URI = "sqlite:///" + os.path.join(BASE_DIR, "apidata.db")
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    JWT_SECRET_KEY = "jwt-app-secret-key-change-it"
    JWT_ACCESS_TOKEN_EXPIRES = timedelta(hours=1)

    POSTGRES_USER = "texturaAdmin"
    POSTGRES_PASSWORD = "texturaPassword"
    POSTGRES_MULTIPLE_DATABASES = "textura"
