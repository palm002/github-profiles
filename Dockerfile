FROM node:alpine as builder
WORKDIR /app
COPY ./package.json ./yarn.lock ./
RUN yarn install
COPY . .
RUN yarn build
# outputs files in /app/build folder

FROM nginx
COPY --from=builder /app/build /usr/share/nginx/html