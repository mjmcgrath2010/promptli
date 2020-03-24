# Specify a base image
FROM node:10-alpine AS alpine
WORKDIR /app
RUN mkdir app
RUN mkfir widget
# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

COPY ./app/package*.json ./app
COPY ./app/yarn.lock ./app

RUN yarn install
COPY ./app ./app


# Install dependencies for widget
COPY ./widget/package.json ./widget
RUN  yarn install
COPY ./widget ./widget
RUN  yarn build
COPY ./widget/build ./static/widget

RUN cd app && yarn build
