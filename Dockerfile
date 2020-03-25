# Specify a base image
FROM node:10-alpine AS alpine
WORKDIR /app
RUN mkdir app
RUN mkdir widget

# add `/app/node_modules/.bin` to $PATH
COPY ./app/package*.json ./app
COPY ./app/yarn.lock ./app


COPY ./app ./app


# Install dependencies for widget
COPY ./widget/package.json ./widget
COPY ./widget ./widget
RUN  cd widget && yarn install && yarn build
COPY ./widget/build ./app/static/widget
RUN cd app &&  apk add --no-cache --virtual .gyp \
                      python \
                      make \
                      g++ \
                  && yarn install \
                  && yarn build \
                  && apk del .gyp
