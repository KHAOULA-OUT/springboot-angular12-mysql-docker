FROM node:latest as builder

RUN mkdir -p /app

WORKDIR /app

COPY . .

RUN npm install
RUN npm run build --prod

CMD ["npm", "start"]

FROM nginx:alpine

COPY --from=builder app/dist/angular12-crud-application-demo usr/share/nginx/html
