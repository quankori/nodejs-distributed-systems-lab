FROM node:22.2.0-alpine

RUN apk add --no-cache libc6-compat python3 make g++

WORKDIR /usr/src/app

RUN npm install -g pnpm

COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./

RUN pnpm install

COPY . .

CMD ["pnpm", "start:dev"]
