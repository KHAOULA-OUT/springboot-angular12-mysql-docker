FROM node:latest as node

#create root folder
RUN mkdir -p /frontend
# access the root folder
WORKDIR /frontend

#install dependencies
COPY . /frontend/
RUN npm install

#build application
RUN npm run build

#curl nginx
FROM nginx:alpine

COPY --from=node /frontend/dist/angular12-crud-application-demo /usr/share/nginx/html