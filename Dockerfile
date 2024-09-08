# Use the official Node.js 16 image as a base image
FROM node:16.20.2

# Set the working directory in the container
WORKDIR /app

# Copy package.json and yarn.lock into the container
COPY package.json yarn.lock dist ./

# Install dependencies using Yarn
RUN yarn install

# Copy the rest of the application code into the container
COPY . .

# Build the application
RUN yarn build

# Expose the port the app runs on
EXPOSE 3000

# Command to start the application
CMD ["yarn", "start"]

