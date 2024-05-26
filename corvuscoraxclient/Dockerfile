# Use an official Node.js runtime as a base image
FROM node:18-alpine AS build

# Set the working directory in the container
WORKDIR /app/corvuscoraxclient

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your application code
COPY . .

# Build your React app for production
RUN npm run build

# Stage 2: Nginx setup
FROM nginx:stable-alpine

# Copy the build output to the Nginx public directory
COPY --from=build /app/corvuscoraxclient/dist /usr/share/nginx/html

# Expose the port Nginx will listen on
EXPOSE 8081

# Remove the default Nginx config
RUN rm /etc/nginx/conf.d/default.conf

# Modify the default Nginx config to listen on port 8080
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]