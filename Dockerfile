FROM node:latest

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

EXPOSE 3000

CMD ["export", "HOST=0.0.0.0"]
CMD ["npm", "start"]
