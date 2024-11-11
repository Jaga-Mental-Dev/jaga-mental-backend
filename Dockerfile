FROM node:22.9-alpine

WORKDIR /app

COPY . .

COPY .env .env

RUN npm install

EXPOSE 3000

CMD ["npm", "run", "start-prod"]
