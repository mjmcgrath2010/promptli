FROM node:14.15.1-alpine

WORKDIR /app/server

ENV PATH /app/server/node_modules/.bin:$PATH

COPY ./package.json /app/server/package.json
RUN yarn install
COPY . /app/server

CMD ["yarn", "dev"]
