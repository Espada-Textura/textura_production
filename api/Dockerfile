FROM python:3.9


ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

WORKDIR /apis

COPY . /apis

# install python dependencies
RUN pip install --upgrade pip
RUN pip install -r requirements.txt

RUN pip install debugpy && mv entrypoint.sh /entrypoint.sh

ENTRYPOINT [ "/entrypoint.sh" ]
