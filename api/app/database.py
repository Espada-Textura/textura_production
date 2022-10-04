from os import environ
from math import ceil

from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import scoped_session, sessionmaker, Query


class Paginate:
    def __init__(self, page, per_page, total, items) -> None:
        self.page = page
        self.per_page = per_page
        self.total_records = total
        self.total_pages = ceil(total / per_page)
        self.items = items


class BaseQuery(Query):
    def paginate(self, page=None, per_page=None, count=True):
        """get paginate
        param   self        BaseQuery   BaseQuery class
        param   page        Int         page
        param   per_page    Int         per page
        param   count       Int         count
        return  items       List        Lits of pagiaate
        """

        page = page if page else 1

        per_page = per_page if per_page else 10

        items = (
            self.limit(per_page).offset((page - 1) * per_page).all()
            if page > 0
            else self.all()
        )

        total = self.order_by(None).count() if count else None

        return Paginate(page, per_page, total, items) if page != -1 else items


engine = create_engine(
    "postgresql://{db_username}:{db_pwd}@db/{db_name}".format(
        db_username=environ.get("DB_USERNAME"),
        db_pwd=environ.get("DB_PASSWORD"),
        db_name=environ.get("DB_NAME"),
    )
)

session = scoped_session(sessionmaker(engine, query_cls=BaseQuery))

Based = declarative_base(name="ec_app")
