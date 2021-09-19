# STAGE 1: Build ###
FROM node:14.16-alpine AS build
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build --prod
WORKDIR /usr/src
# STAGE 2: Run ###
FROM nginx:1.17.1-alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /usr/src/app/dist/washingtonsr-blog /usr/share/nginx/html
#COPY /src/nginx-custom.conf /etc/nginx/conf.d/default.conf
