FROM node:20-slim

WORKDIR /home/node/app

RUN apt-get update -y && apt-get install -y openssl && apt-get install -y build-essential libpq-dev

USER node

CMD [ "tail", "-f", "/dev/null" ]