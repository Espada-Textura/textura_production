FROM nginx as build

FROM build as development

RUN rm -rf /etc/nginx/nginx.conf

COPY ./nginx.conf /etc/nginx/

RUN cat /etc/nginx/nginx.conf

CMD ["nginx", "-g", "daemon off;"]
