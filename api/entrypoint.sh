#!/bin/bash

if [ ! -d "./migration" ]; then
    VERSION=$(alembic --version);
    echo "Init alembic migration (alembic version ${VERSION})";
    alembic init migration;
    rm -rf ./migration/env.py ./alembic.ini
    cp ./app/migrator.py ./migration/env.py
    envsubst '${DB_NAME}:${DB_USERNAME}:${DB_PASSWORD}' < ./app/alembic.template > ./alembic.ini && cat ./alembic.ini
fi

python run.py
    