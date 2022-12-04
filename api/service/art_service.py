import skimage
import imageio
from PIL import Image
from io import BytesIO
import base64
import threading

import blurhash
from flask import abort, make_response, request
from flask_jwt_extended import (
    create_access_token,
    create_refresh_token,
    set_refresh_cookies,
    set_access_cookies,
    unset_jwt_cookies,
)

from dao import UserDao, ArtDao
from schema import UserSchema, ArtSchema, NestedArtSchema
from utils import get_art_path


class ArtService:
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

    def create_art(self, current_user=None, art=None):
        """ """

        base64_image = art.get("image")

        with ArtDao() as dao:

            art.pop("image", None)

            art.update({"user_id": current_user.get("id")})

            art = dao.add(art)

            with Image.open(BytesIO(base64.b64decode(base64_image.get("data")))) as img:

                img_type = base64_image.get("mime").split("/")[1]

                img_size = img.size

                img.save(get_art_path(f"{art.aid}.{img_type}"))

                img.resize(
                    (round(img_size[0] / 2), round(img_size[1] / 2)), Image.ANTIALIAS
                )

                img.save(
                    get_art_path(f"{art.aid}_thumbnail.{img_type}"),
                    optimize=True,
                    quality=20,
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
            x_components=5,
            y_components=4,
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

    def delete_art(self, current_user=None, art=None):
        """ """

        with ArtDao() as dao:

            art_medel = dao.get(id=art.get("id"))

            if not current_user.get("id") == art_medel.user_id:
                abort(403)

            art = dao.delete(id=art.get("id"))
