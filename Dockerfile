FROM node:14-alpine3.14
WORKDIR /usr/src/app
COPY package.json ./
RUN npm install && npm audit fix && npm cache clean --force
COPY . .
EXPOSE 3333
CMD [ "npm", "start" ]