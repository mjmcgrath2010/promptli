FROM node:10
WORKDIR /app
EXPOSE 3000

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

COPY ./package*.json ./
COPY ./yarn.lock ./

RUN yarn install
COPY ./ ./
# Install nodemon
RUN yarn global add nodemon

CMD [ "yarn", "dev" ]
