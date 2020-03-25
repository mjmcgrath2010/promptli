# Specify a base image
FROM node:12.16 as build
# docker pull node:12.16-alpine
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
COPY ./app/package*.json ./
COPY ./app/yarn.lock ./


COPY ./app ./

RUN yarn install
RUN yarn build
