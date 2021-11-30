FROM node:10-stretch

WORKDIR /opt/app

RUN apt-get update && \
    apt-get install -y \
  	build-essential

# update npm
RUN npm i -g npm

# Copy in source files
COPY package.json ./package.json
COPY package-lock.json ./package-lock.json
RUN npm i

COPY Makefile ./Makefile
COPY ./src ./src

# clean up
RUN rm -rf /var/lib/apt/lists/*

RUN pnpm test:watch