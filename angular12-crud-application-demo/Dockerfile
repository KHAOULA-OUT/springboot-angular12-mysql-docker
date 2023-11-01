FROM node:12.14.1 as node

RUN echo "nameserver 8.8.8.8" > /etc/resolv.conf && \
    echo "nameserver 8.8.4.4" >> /etc/resolv.conf

#create root folder
RUN mkdir -p /frontend
# access the root folder
WORKDIR /frontend

#install dependencies
COPY . /frontend/

# Install Angular CLI
RUN npm install 

 #build application : as prod 
 RUN npm run build 

# Stage 2: Set up Nginx to serve the built application
FROM nginx:alpine

# Copy the built application from the previous stage
COPY --from=node /frontend/dist/angular12-crud-application-demo /usr/share/nginx/html
