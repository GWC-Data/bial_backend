# Use Node.js base image 
FROM node:20-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json first
COPY package*.json ./

# Install dependencies
RUN npm install

# Update specific packages
RUN npm update node-server-engine test-tools

# Copy the entire project
COPY . .

# Build TypeScript code
RUN npm run build

# Expose the application port
EXPOSE 5050


# Start the application
CMD ["npm", "start"]
