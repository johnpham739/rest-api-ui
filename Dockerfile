FROM node:12.16.1-alpine As builder

WORKDIR /the/workdir/path

COPY package.json package-lock.json ./

RUN npm install

COPY . .

RUN npm run build --prod

# pass off the static resources (everything in my dist folder)
# to a web server
FROM nginx:1.15.8-alpine

COPY --from=builder /usr/src/app/dist/rest-api-ui/ /usr/share/nginx/html