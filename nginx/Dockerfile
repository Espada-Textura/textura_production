FROM nginx as build

FROM build as development

RUN rm -rf /etc/nginx/nginx.conf

COPY ./nginx.conf /etc/nginx/

# COPY ./certs /etc/certs

# RUN ls /etc/certs

RUN cat /etc/nginx/nginx.conf

CMD ["nginx", "-g", "daemon off;"]

FROM build as production