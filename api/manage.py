import click
import pandas as pd

from dao import StateDao, UserDao


@click.group()
def state():
    pass


@click.command()
def add_states():
    click.echo("Reading data from excel fiel...")

    df = pd.read_excel("states.xlsx")

    schemas = [row.to_dict() for index, row in df.iterrows()]

    with StateDao() as dao:

        dao.add_all(schemas)

    click.echo("Successfully adding states")


@click.command()
def add_cities():
    click.echo("Reading data from excel fiel...")

    df = pd.read_excel("states.xlsx", sheet_name="city")

    cities = []

    with StateDao() as dao:

        for state in dao.get_all():

            state_cities = df[df.state == state.name]

            cities += [
                {"name": city, "state_id": state.id}
                for index, city in state_cities.name.to_dict().items()
            ]

        dao.add_cities(cities)

    click.echo("Successfully adding cities")


state.add_command(add_states)

state.add_command(add_cities)


@click.command()
@click.option("--username", help="login username")
@click.option("--password", help="account password")
@click.option("--email", default="osa@plasgate.com", help="account email")
def add_admin(username, password, email):

    with UserDao() as dao:
        user = dao.add_admin(
            {"username": username, "password": password, "email": email}
        )
    return f"Successfully added {user.username}"


state.add_command(add_admin)


if __name__ == "__main__":
    state()
