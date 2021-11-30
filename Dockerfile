FROM node:16-slim

ADD . /banco_react

WORKDIR /banco_react

RUN npm install