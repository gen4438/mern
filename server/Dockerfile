FROM node:16.14
WORKDIR /usr/src/app
COPY package*.json yarn.lock ./
RUN yarn
ARG CACHEBUST=2022-02-28-01
COPY . .
EXPOSE 5000
CMD node server.js
