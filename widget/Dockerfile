# Specify a base image
FROM node:10-alpine AS alpine
WORKDIR /app
EXPOSE 3001
# Install dependencies
COPY package.json .
RUN yarn install
COPY . .
RUN yarn build

# Default command
CMD ["npm", "run", "start"]
