from flask import Flask
import datetime

from flask_jwt_extended import JWTManager

app = Flask(
    __name__,
    static_url_path="/api/uploads",
    static_folder="uploads",
    root_path="/api",
)

app.config["JWT_ACCESS_TOKEN_EXPIRES"] = datetime.timedelta(seconds=3600)
app.config["JWT_REFRESH_TOKEN_EXPIRES"] = datetime.timedelta(seconds=3600)

jwt = JWTManager(app)


def create_app(config=None):
    if config:
        app.config.from_object(config)

    return app
