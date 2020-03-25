# Specify a base image
FROM node:10-alpine AS alpine
WORKDIR /app
RUN mkdir app
RUN mkdir widget

# add `/app/node_modules/.bin` to $PATH
COPY ./app/package*.json ./
COPY ./app/yarn.lock ./


COPY ./app ./

RUN yarn install
