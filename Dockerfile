FROM node:14.18-stretch

WORKDIR /opt/app

RUN apt-get update && \
    apt-get install -y \
  	build-essential

# install pnpm
RUN npm i -g pnpm

# Copy in source, configuration, and test files
COPY package.json ./package.json
COPY pnpm-lock.yaml ./pnpm-lock.yaml
COPY tsconfig.json ./tsconfig.json
COPY tsconfig.build.json ./tsconfig.build.json
COPY Makefile ./Makefile
COPY ./src ./src
COPY ./test ./test

# install dependencies via pnpm
RUN pnpm i

# clean up
RUN rm -rf /var/lib/apt/lists/*