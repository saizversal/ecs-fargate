<<<<<<< HEAD
FROM node:20-alpine
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "start"]
=======
FROM node:18-alpine

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

EXPOSE 3000
CMD ["node", "index.js"]
>>>>>>> 9c020b28084037fdeb3f1f432394e5c8fcdfeb3d
