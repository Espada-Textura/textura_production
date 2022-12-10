from flask import Blueprint, make_response, abort, request
from flask_jwt_extended import jwt_required

from schema import ArtSchema, NestedArtSchema
from dao import ArtDao
from utils import validate_request, validate_params, get_current_user
from service import ArtService

art_route = Blueprint("art_route", __name__, url_prefix="/api")


@art_route.route("/arts", methods=["GET"])
@validate_params("ArtSchema")
def art_view(expression=None, pagination=None):

    service = ArtService()

    if not pagination:
        pagination = {"per_page": 30}

    arts_json = service.get_arts(expression=expression, pagination=pagination)

    return make_response(arts_json, 200)


@art_route.route("/arts/<aid>", methods=["GET"])
@validate_params("ArtSchema")
def art_view_by_aid(aid=None, expression=None, pagination=None):

    service = ArtService()

    art_json = service.get_art_by_aid(aid=aid)

    return make_response(art_json, 200)


@art_route.route("/arts/new", methods=["POST"])
@jwt_required()
@validate_request("ArtSchema", exclude=["user"])
def art_create(art=None):

    service = ArtService()

    current_user = get_current_user()

    arts_json = service.create_art(current_user=current_user, art=art)

    return make_response(arts_json, 201)


@art_route.route("/arts", methods=["PUT"])
@jwt_required()
@validate_request("ArtSchema")
def art_upadte(art=None):

    service = ArtService()

    current_user = get_current_user()

    arts_json = service.update_art(current_user=current_user, art=art)

    return make_response(arts_json, 200)


@art_route.route("/arts/<aid>", methods=["DELETE"])
@jwt_required()
def art_delete(aid=None):

    service = ArtService()

    current_user = get_current_user()

    service.delete_art(current_user=current_user, aid=aid)

    return make_response({}, 202)
