FROM node:18-alpine
WORKDIR /srv/fungiserver/
RUN cd ../.. && npm i && npm run build:server

COPY dist/* .

ENTRYPOINT ["node", "index.js"]