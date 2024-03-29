### Build Step
# pull the Node.js Docker image
FROM node:18.14 as builder


# change working directory
WORKDIR /usr/src/app

# copy the package.json files from local machine to the workdir in container
COPY package*.json ./

# run npm install in our local machine
RUN npm install

# copy the generated modules and all other files to the container
COPY . .

# build the application
RUN npm run build

### Serve Step
# pull the Node.js Docker image
FROM nginx:1.19-alpine

EXPOSE 80

COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=builder /usr/src/app/dist /usr/share/nginx/html