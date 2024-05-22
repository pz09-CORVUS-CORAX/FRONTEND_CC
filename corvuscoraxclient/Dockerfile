# Use an official node image as the base image
FROM node:14

# Create and change to the app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./
RUN npm install

# Copy app source code
COPY . .

# Build the app
RUN npm run build

# Serve the app
CMD ["npx", "serve", "build"]

# Expose the port the app runs on
EXPOSE 5000
