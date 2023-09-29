FROM node:18

WORKDIR /app

COPY .env .env

ENV $(cat .env | xargs)

COPY package*.json ./

RUN npm install 

COPY . .

EXPOSE ${PORT}

CMD ["npm", "start"]