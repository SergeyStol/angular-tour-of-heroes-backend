FROM node:18.16.0-alpine3.16

USER node

ENV NODE_ENV=production

WORKDIR /app

COPY --chown=node:node package*.json ./

RUN npm update
RUN npm ci --only=production

COPY --chown=node:node . .

EXPOSE 8080
CMD [ "node", "src/main/js/main.js" ]