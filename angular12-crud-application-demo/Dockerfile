FROM node:14.15.0 as node

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

COPY --from=node /frontend/dist/sakai-ng /usr/share/nginx/html
