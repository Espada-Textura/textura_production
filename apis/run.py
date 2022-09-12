# -*- encoding: utf-8 -*-

"""
Copyright (c) 2019 - present AppSeed.us
"""

from flask import Blueprint, make_response, abort


from app import create_app, BaseConfig

from route import auth_route


current_app = create_app(BaseConfig)
current_app.register_blueprint(auth_route)

if __name__ == "__main__":
    current_app.run(debug=True, host="0.0.0.0", port=5001)
