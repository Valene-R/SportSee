# DEVELOPMENT
# Dockerfile for Frontend with React, Vite, and Tailwind CSS

# Use a lightweight Node.js image with Long-Term Support (LTS)
FROM node:lts-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package files first to leverage Docker caching for dependencies
COPY package.json package-lock.json ./

# Install project dependencies
RUN npm install

# Copy the rest of the application files into the container
COPY . .

# Expose the default development port for Vite
EXPOSE 5173

# Start the application in development mode
CMD ["npm", "run", "dev"]


# # PRODUCTION
# # Build the frontend
# FROM node:lts-alpine AS build

# WORKDIR /app

# # Copy necessary files
# COPY package.json package-lock.json ./
# RUN npm install

# # Copy the rest of the files and build the application
# COPY . .
# RUN npm run build

# # Serve with NGINX
# FROM nginx:alpine AS production

# # Copy the built files to NGINX's default directory
# COPY --from=build /app/dist /usr/share/nginx/html

# # Expose port 80
# EXPOSE 80

# # Start NGINX
# CMD ["nginx", "-g", "daemon off;"]