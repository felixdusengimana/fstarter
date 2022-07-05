FROM node:alpine as build

WORKDIR /usr/src/client

COPY package.json .

RUN npm install

COPY . .

RUN npm run build

FROM nginx:1.15

COPY --from=build /usr/src/client/build /usr/share/nginx/html
COPY ./.nginx/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80

# CMD ["npm", "start"]
