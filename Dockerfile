# Specify a base image
FROM node:10-alpine AS alpine
WORKDIR /app
RUN mkdir app
RUN mkdir widget

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

COPY ./app/package*.json ./app
COPY ./app/yarn.lock ./app


COPY ./app ./app


# Install dependencies for widget
COPY ./widget/package.json ./widget
COPY ./widget ./widget
RUN  cd /widget && yarn install
RUN  cd /widget && yarn build
COPY ./widget/build ./static/widget
WORKDIR /app
RUN cd /app && yarn build
