FROM node:7.4.0

EXPOSE 3000

ADD . /app
WORKDIR /app
RUN npm install -g http-server
RUN npm install
RUN npm run build
WORKDIR /app/build
ENTRYPOINT http-server -p 3000 .