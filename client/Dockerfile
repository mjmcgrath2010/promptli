FROM node:14.15.1-alpine
WORKDIR /app/client

ENV PATH /app/client/node_modules/.bin:$PATH

COPY ./package.json /app/client/package.json
RUN yarn install
COPY . /app/client

CMD ["yarn", "start"]
