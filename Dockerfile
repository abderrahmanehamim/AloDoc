# Use an official Node runtime as a parent image
FROM node:14

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install Angular CLI globally
RUN npm install -g @angular/cli

# Install project dependencies
RUN npm install

# Copy the remaining application code to the working directory
COPY . .

# Expose the port the app runs on
EXPOSE 4200

# Start the application
CMD ["ng", "serve", "--host", "0.0.0.0"]
