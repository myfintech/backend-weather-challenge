FROM node:16.13.1-alpine3.14

WORKDIR /opt/app

RUN apk add --update \
    git

# install pnpm via npm
RUN npm i -g pnpm

# need to init an arbitrary git repo in the image so that jest --watch runs correctly (has a dep on git/hg)
RUN git init

# Copy in source, configuration, and test files
COPY ./src ./src

# Copy in test files
COPY ./test ./test

# Copy in tsconfig files
COPY tsconfig.json ./tsconfig.json
COPY tsconfig.build.json ./tsconfig.build.json

# Copy in package.json & pnpm lock
COPY package.json ./package.json
COPY pnpm-lock.yaml ./pnpm-lock.yaml

# install dependencies (and dev-deps) via pnpm
RUN pnpm i

# clean up
RUN rm -rf /var/lib/apt/lists/*