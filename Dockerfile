FROM node:18-alpine AS build
WORKDIR /srv/
COPY . .
RUN npm i && npm run build:server

FROM node:18-alpine
WORKDIR /srv/fungiserver/
COPY --from=build /srv/backend/server/dist/* ./

ENTRYPOINT ["node", "index.js"]