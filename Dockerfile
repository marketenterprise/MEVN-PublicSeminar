FROM node:18.14.0-alpine

COPY ./entrypoint.sh /usr/local/bin/docker-entrypoint.sh
RUN ["chmod", "+x", "/usr/local/bin/docker-entrypoint.sh"]
COPY . ./app

ENTRYPOINT [ "/usr/local/bin/docker-entrypoint.sh" ]