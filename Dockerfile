# Specify a base image
FROM node:12.16 as build
# docker pull node:12.16-alpine
WORKDIR /app
ENV NODE_ENV="production"
ENV SENTRY_DSN="https://7a8ac82f92e94f788fff30a6a80dcf3b:2be70ea245bc432cb0ad29d6487071ea@sentry.io/1983503"
ENV SENTRY_DSN_CLIENT="https://76c0e6f71ee34a4d98bf24f712a11062@sentry.io/1984746"
# add `/app/node_modules/.bin` to $PATH
COPY ./app/package*.json ./
COPY ./app/yarn.lock ./


COPY ./app ./

RUN yarn install
RUN yarn build
