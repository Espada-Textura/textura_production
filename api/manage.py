import click
import pandas as pd

from dao import StateDao, UserDao


@click.group()
def state():
    pass


@click.command()
@click.option("--username", help="login username")
@click.option("--password", help="account password")
@click.option("--email", default="admin@textura-art.com", help="account email")
def add_admin(username, password, email):

    with UserDao() as dao:
        user = dao.add_admin(
            {"username": username, "password": password, "email": email}
        )
    return f"Successfully added {user.username}"


state.add_command(add_admin)


if __name__ == "__main__":
    state()
