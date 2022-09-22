#!/bin/bash

set -e
set -u

function create_user_and_database() {
    local database=$1
    echo "  Creating user and database '$database'"
    psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" <<-EOSQL
	    CREATE DATABASE $database;
	    GRANT ALL PRIVILEGES ON DATABASE $database TO $POSTGRES_USER;
EOSQL
}

function create_table(){
    local database=$1
    local table=$2
    echo "  Creating table '$table' using '$POSTGRES_USER' user"
    psql -v ON_ERROR_STOP=1 --dbname $db --username "$POSTGRES_USER" <<-EOSQL
        CREATE TABLE "$table" (id SERIAL NOT NULL, name varchar(255), PRIMARY KEY (id), UNIQUE (id));
EOSQL
}

if [ -n "$POSTGRES_MULTIPLE_DATABASES" ]; then
    echo "Multiple database creation requested: $POSTGRES_MULTIPLE_DATABASES"
    clean_db_list=$(echo "$POSTGRES_MULTIPLE_DATABASES" |
    tr -d "\n" | tr -d ' ' | tr ',' ' ')
    for db in $clean_db_list; do
        create_user_and_database "$db"
        # create pre-requisite tables
        if [ "$db" = "smsgwdev" ]; then
            declare -a tables=("role" "capability" "permission" "package" "user" "profile" "rate" "rate_details" "operator" "prefix" "recipient" "campaign" "senderId" "bill")
            for table in ${tables[@]}; do
                create_table $db $table
            done
        fi
    done
    echo "Multiple databases created"
fi
