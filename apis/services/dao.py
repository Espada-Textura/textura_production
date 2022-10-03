from logging import Manager

from app import db
from flask_sqlalchemy import Pagination

class DAO:
    """Database access object class"""

    _model = None
    _query = None

    def __init__(self, model=None) -> None:
        self._model = model
        self.set_query()

    def set_query(self) -> None:
        self._query = db.session.query(self._model)

    def set_filter(self, query, **expr):
        return query.filter_by(**expr)

    def get(self, **kward):
        """Query data from database based on model
        
            param: expr         SQL expression object. ex: {"id": 1}
            param: pagination   SQLAlchemy pagination object. ex: {page: 1, per_page: 2}
        """
        expr = kward.get("expr", dict())
        query = self.set_filter(self._query, **expr)
        pagination = kward.get("pagination")
        data = query.all() if not pagination else query.paginate(**pagination)
        return data

    def get_by_id(self, id):
        query = self._query.filter(self._model.id == id)
        return query.one_or_none()

    def add(self, model):
        model = self._model(model)
        db.session.add(model)
        db.session.commit()
        return model

    def update(self, model):
        id = model.get("id")
        _model = self.get_by_id(id)
        if not _model:
            return None
        for k, v in model.items():
            if hasattr(_model, k):
                if getattr(_model, k) != v:
                    setattr(_model, k, v)
        db.session.commit()
        return _model

    def delete(self, model_id):
        model = self.get_by_id(model_id)
        if not model:
            return None
        db.session.delete(model)
        db.session.commit()
        return model_id

    def delete_all(self, model):
        pass

    def jsonify(self, schema, model, key=None, **kward):
        """jsonify database object to json

            param: schema   marshmallow mapped schema
            param: modal    database object mapped model
            param: key      json key for dump array object. required if many is set to True
        """
        _schema = schema()
        json = _schema.dump(model, **kward)
        return json if not key else {key: json}
