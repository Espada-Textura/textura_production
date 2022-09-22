FROM postgres:latest as builder

# configure time zone
ENV TZ=Asia/Phnom_Penh
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone
RUN dpkg-reconfigure --frontend noninteractive tzdata

COPY ./vendors/postgres/00-create-multiple-postgresql-databases.sh /docker-entrypoint-initdb.d/

EXPOSE 5432

CMD [ "--max_connections=1500" ]