FROM node:14

WORKDIR /app

COPY ./backend/ /app

RUN yarn install

RUN yarn build
EXPOSE 3333

CMD ["node","./dist/server.js"]