FROM node:latest
WORKDIR /app
ADD . /app
RUN npm install
EXPOSE 3050
CMD npm start