from flask import Flask, url_for, send_from_directory
import datetime

from flask_jwt_extended import JWTManager

from .config import DevConfigs

app = Flask(
    __name__,
    static_url_path="/api/art",
    static_folder="art",
    root_path="/api",
)

app.config["JWT_TOKEN_LOCATION"] = ["headers", "json", "query_string"]
app.config["JWT_ACCESS_TOKEN_EXPIRES"] = datetime.timedelta(seconds=3600)
app.config["JWT_REFRESH_TOKEN_EXPIRES"] = datetime.timedelta(seconds=3600)
app.config["JWT_COOKIE_SECURE"] = False
app.config["JWT_SECRET_KEY"] = DevConfigs.JWT_SECRET_KEY
jwt = JWTManager(app)


def create_app(config=None):
    if config:
        app.config.from_object(config)

    return app
