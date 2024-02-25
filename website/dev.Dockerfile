FROM node:16-alpine
RUN apk add g++ make py3-pip

WORKDIR /app

COPY package*.json .

RUN npm install

COPY . .

ENV NUXT_PORT=3000

CMD ["npm", "run", "start"]
