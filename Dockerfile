FROM node:16 AS build
WORKDIR /app
COPY ./package*.json /app/
RUN npm install
COPY . /app
RUN npm run build

FROM caddy:2.4.6-alpine
COPY ./etc/Caddyfile /etc/caddy/Caddyfile
COPY --from=build /app/dist/cb-widget-api-test /srv
