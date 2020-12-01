FROM node:14.15.1-alpine

RUN npm install -g nodemon

USER node

RUN mkdir /home/node/app
RUN mkdir /home/node/app/server

WORKDIR /home/node/app/server

COPY --chown=node:node  package.json yarn.lock ./
RUN rm -rf node_modules && yarn install --frozen-lockfile
COPY --chown=node:node . .

EXPOSE 5000

CMD ["nodemon", "index.js"]
