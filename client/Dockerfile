FROM node:14.15.1-alpine

USER node

RUN mkdir /home/node/app
RUN mkdir /home/node/app/client

WORKDIR /home/node/app/client


COPY --chown=node:node  package.json yarn.lock ./
RUN rm -rf node_modules && yarn install --frozen-lockfile
COPY --chown=node:node . .

EXPOSE 3000

CMD ["yarn", "start"]
