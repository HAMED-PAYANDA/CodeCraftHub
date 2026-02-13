# --------------------------------------------------
# Dockerfile for User Management Service
# --------------------------------------------------
# This Dockerfile builds and runs the Node.js backend
# application for CodeCraftHub.
# --------------------------------------------------

# Use an official Node.js LTS image
FROM node:20-alpine

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json first
# This allows Docker to cache dependencies efficiently
COPY package*.json ./

# Install application dependencies
RUN npm install

# Copy the rest of the application source code
COPY . .

# Expose the application port
EXPOSE 5000

# Start the Node.js application
# app.js is the correct entry point in your project
CMD ["node", "src/app.js"]

