# Use an official Node.js runtime as a base image
FROM node:18-alpine 

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

# Expose the port your app runs on (usually 3000 for React apps)
EXPOSE 5173

# Start your React app
CMD ["npm", "run", "dev"]
