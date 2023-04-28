FROM node:16-alpine

WORKDIR /app

COPY package*.json .

RUN npm install -g pnpm

RUN pnpm install

COPY . .

RUN pnpm build

EXPOSE 3002

CMD ["pnpm", "serve", "--host", "0.0.0.0"]

