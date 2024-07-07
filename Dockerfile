# Use a base image with the latest Node.js LTS installed
FROM node:20-alpine as builder
# install dumb-init, which ensure that all signals are proxied to the Node.js process
#RUN apt-get update && apt-get install -y --no-install-recommends dumb-init
# Set the working directory inside the container
WORKDIR /app
# Give node user access to the app dir, not working
# COPY --chown=node:node . $WORKDIR
# Copy package.json and package-lock.json to the working directory
COPY package*.json .
# Install dependencies
RUN npm install --ignore-scripts
# Copy the rest of the application code to the working directory
COPY . .
# Build the app
RUN npm run build
# Run as node user, not working
# USER node
# Start the app
#CMD ["dumb-init", "node", "server.js"]
CMD ["npm", "start"]