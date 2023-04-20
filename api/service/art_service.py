import skimage
import imageio
from PIL import Image
from io import BytesIO
import base64
import threading
import os

import blurhash
from flask import abort, make_response, request
from flask_jwt_extended import (
    create_access_token,
    create_refresh_token,
    set_refresh_cookies,
    set_access_cookies,
    unset_jwt_cookies,
)

from dao import UserDao, ArtDao, ArtPostDao
from schema import (
    UserSchema,
    ArtSchema,
    NestedArtSchema,
    ArtPostSchema,
    NestedArtPostSchema,
)
from utils import get_art_path
from app import ArtServiceConfigs


class ArtService:
    def get_art_post_by_pid(self, pid=None):

        with ArtPostDao() as dao:

            art_post_model = dao.get_by_pid(pid=pid)

            if not art_post_model.is_publishing:
                abort(404)

            art_post_json = dao.jsonify(
                ArtPostSchema,
                art_post_model,
            )

        return art_post_json

    def get_art_posts(self, user=None, expression={}, pagination={}):
        """ """
        with ArtPostDao() as dao:

            if "is_publishing" not in expression.keys():
                expression.update({"is_publishing": True})

            art_posts = dao.get_all(expression=expression, pagination=pagination)

            art_posts_json = dao.jsonify(
                NestedArtPostSchema if hasattr(art_posts, "items") else ArtPostSchema,
                art_posts,
                many=True,
            )

        return art_posts_json

    def create_art_post(self, current_user=None, art_post=None):

        art_post_schema = art_post

        art_post_schema.update({"user_id": current_user.get("id")})

        arts = art_post_schema.get("arts")

        with ArtPostDao() as art_post_dao:

            art_post_model = art_post_dao.add(art_post_schema)

            for art_schema in arts:
                art_schema.update({"art_post_id": art_post_model.id})
                self.create_art(art=art_schema)

            art_post_json = art_post_dao.jsonify(ArtPostSchema, art_post_model)

        return art_post_json

    def get_arts(self, user=None, expression=None, pagination=None):
        """ """

        with ArtDao() as dao:

            arts = dao.get_all(expression=expression, pagination=pagination)

            arts_json = dao.jsonify(
                NestedArtSchema if hasattr(arts, "items") else ArtSchema,
                arts,
                many=True,
            )

        return arts_json

    def get_art_by_aid(self, aid=None):

        with ArtDao() as dao:

            art = dao.get_by_aid(aid=aid)

            art_json = dao.jsonify(
                ArtSchema,
                art,
            )

        return art_json

    def create_art(self, art=None):
        """ """

        base64_image = art.get("image")

        with ArtDao() as dao:

            art.pop("image", None)

            art = dao.add(art)

            with Image.open(BytesIO(base64.b64decode(base64_image.get("data")))) as img:

                img_type = base64_image.get("mime").split("/")[1]

                img_size = img.size
                art.width = img_size[0]
                art.height = img_size[1]

                img.save(
                    get_art_path(f"{art.aid}.{img_type}"),
                    optimize=True,
                )

                img.thumbnail(ArtServiceConfigs.APT_MAX_SIZE, Image.LANCZOS)

                img_size = img.size
                art.twidth = img_size[0]
                art.theight = img_size[1]

                img.save(
                    get_art_path(f"{art.aid}_thumbnail.{img_type}"),
                    quality=ArtServiceConfigs.APT_SAVE_QUALITY,
                    optimize=True,
                )

            art.rpath = str(get_art_path(f"{art.aid}.{img_type}"))

            art.status = "completed"

            art_json = dao.jsonify(ArtSchema, art)

            self.emit_generate_image_hash(
                art=art_json, path=f"{art.aid}_thumbnail.{img_type}"
            )

        return art_json

    def get_iamge_hash(self, art=None, path=""):

        if not art:
            pass

        preimage = blurhash.encode(
            get_art_path(path),
            x_components=ArtServiceConfigs.BH_X_COMPONENT,
            y_components=ArtServiceConfigs.BH_Y_COMPONENT,
        )

        with ArtDao() as dao:

            art_medel = dao.get(id=art.get("id"))

            art_medel.preimage = preimage

    def emit_generate_image_hash(self, art=None, path=""):
        sending = threading.Thread(target=self.get_iamge_hash, args=[art, path])
        sending.start()

    def update_art(self, current_user=None, art=None):
        """ """

        with ArtDao() as dao:

            art_medel = dao.get(id=art.get("id"))

            if not current_user.get("id") == art_medel.user_id:
                abort(403)

            art = dao.update(art)

            art_json = dao.jsonify(ArtSchema, art)

        return art_json

    def delete_art(self, current_user=None, aid=None):
        """ """

        with ArtDao() as dao:

            art_medel = dao.get_by_aid(aid=aid)

            if not art_medel:
                abort(404)

            if not current_user.get("id") == art_medel.user_id:
                abort(403)

            try:
                if os.path.exists(art_medel.rpath):
                    os.remove(art_medel.rpath)
                    os.remove(art_medel.get_spath())
            except:
                abort(403)

            art = dao.delete(id=art_medel.id)

            return True
