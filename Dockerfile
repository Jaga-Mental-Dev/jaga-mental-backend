FROM node:22.9-alpine

WORKDIR /app

COPY . .

COPY .env .env

RUN pnpm install

EXPOSE 3000

CMD ["pnpm", "run", "start"]
