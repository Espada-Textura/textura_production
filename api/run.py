from flask.blueprints import Blueprint

from app import create_app, DevConfigs
from route import *

current_app = create_app(DevConfigs)

current_app.register_blueprint(auth_route)

route = {k: v for k, v in globals().items() if isinstance(v, Blueprint)}

for _route in route.values():
    current_app.register_blueprint(_route)

if __name__ == "__main__":
    current_app.run(host=DevConfigs.HOST, port=5000)
