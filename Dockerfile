FROM caddy:2.4.6-alpine

COPY ./etc/Caddyfile /etc/caddy/Caddyfile
COPY ./dist/cb-widget-api-test /srv

ENV SERVER_HOST=localhost
