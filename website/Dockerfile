FROM node:16-alpine

WORKDIR /app

RUN apk add --update python3 make g++

COPY package.json /app/
RUN npm install --production

COPY . /app/
RUN npm run build

EXPOSE ${FRONTEND_PORT}

CMD ["npm", "run", "start"]
