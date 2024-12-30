# DEVELOPMENT
FROM node:lts-alpine

ADD . /app/
WORKDIR /app

RUN yarn install

EXPOSE 3000

# Start the application in development mode when the container is started (e.g., with `docker start micro-api`)
CMD ["yarn", "dev"]


## PRODUCTION
# # Base image
# FROM node:lts-alpine

# # Set the working directory inside the container
# WORKDIR /app

# # Copy the necessary files
# COPY package.json yarn.lock ./

# # Install production-only dependencies
# RUN yarn install --production

# # Copy the remaining application files
# COPY . .

# # Expose port 3000 for the backend
# EXPOSE 3000

# # Start the application
# CMD ["yarn", "start"]