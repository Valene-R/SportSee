FROM node:lts-alpine

ADD . /app/
WORKDIR /app

RUN yarn

EXPOSE 3000

# Start the application in development mode when the container is started (e.g., with `docker start micro-api`)
CMD ["yarn", "dev"]
