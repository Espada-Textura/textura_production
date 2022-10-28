FROM python:3.8 AS build

# Keeps Python from generating .pyc files in the container
ENV PYTHONDONTWRITEBYTECODE=1

# Turns off buffering for easier container logging
ENV PYTHONUNBUFFERED=1

EXPOSE 5000

WORKDIR /api

COPY . /api

RUN apt-get update && apt-get install gettext -y

# install required packages
RUN pip install --upgrade pip\
    && pip install -r requirements.txt

FROM build AS development

RUN pip install debugpy && mv entrypoint.dev.sh /entrypoint.sh

ENTRYPOINT [ "/entrypoint.sh" ]

FROM build AS production

RUN mv entrypoint.sh /entrypoint.sh

ENTRYPOINT [ "/entrypoint.sh" ]