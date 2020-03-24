# Specify a base image
FROM node:10-alpine AS alpine
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

COPY ./app/package*.json ./app
COPY ./app/yarn.lock ./app

RUN cd /app && yarn install
RUN cd ../
COPY ./app ./app


# Install dependencies for widget
COPY ./widget/package.json ./widget
RUN cd widget && yarn install
COPY ./widget ./widget
RUN cd widget && yarn build
COPY ./widget/build ./static/widget

RUN cd app && yarn build
