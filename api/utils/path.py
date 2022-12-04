from pathlib import Path


def get_root_path() -> Path:
    return Path(__file__).parent.parent


def get_art_path(file_name=None) -> Path:
    return (
        get_root_path().joinpath(f"art/{file_name}")
        if file_name
        else get_root_path().joinpath("art")
    )
