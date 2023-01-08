from flask import Blueprint, make_response, abort, request
from flask_jwt_extended import jwt_required
from flask_cors import cross_origin
import requests


from schema import ArtSchema, NestedArtSchema
from dao import ArtDao
from utils import validate_request, validate_params, get_current_user
from service import ArtService

art_post_route = Blueprint("art_post_route", __name__, url_prefix="/api")


@art_post_route.route("/art-posts", methods=["GET"])
@cross_origin()
@validate_params("ArtSchema")
def art_post_view(expression=None, pagination=None):

    service = ArtService()

    if not pagination:
        pagination = {"per_page": 100}

    art_posts_json = service.get_art_posts(expression=expression, pagination=pagination)

    return make_response(art_posts_json, 200)


@art_post_route.route("/art-posts/<pid>", methods=["GET"])
@cross_origin()
@validate_params("ArtSchema")
def art_post_view_by_pid(pid=None, expression=None, pagination=None):

    service = ArtService()

    art_post_json = service.get_art_post_by_pid(pid=pid)

    return make_response(art_post_json, 200)


@art_post_route.route("/art-posts/new", methods=["POST"])
@cross_origin()
@jwt_required(locations=["headers"])
@validate_request("ArtPostSchema", exclude=["user"])
def art_post_create(art_post=None):

    service = ArtService()

    current_user = get_current_user()

    art_post_json = service.create_art_post(
        current_user=current_user, art_post=art_post
    )

    return make_response(art_post_json, 201)


@art_post_route.route("/art-posts", methods=["PUT"])
@jwt_required(locations=["headers"])
@validate_request("ArtPostSchema", exclude=["arts"])
def art_post_upadte(art_post=None):

    # service = ArtService()

    # current_user = get_current_user()

    # arts_json = service.update_art(current_user=current_user, art=art)

    return make_response({}, 200)


@art_post_route.route("/art-posts/<aid>", methods=["DELETE"])
@jwt_required()
def art_post_delete(aid=None):

    # service = ArtService()

    # current_user = get_current_user()

    # service.delete_art(current_user=current_user, aid=aid)

    return make_response({}, 202)
