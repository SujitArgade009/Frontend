# Step 1: Build the application
FROM node:18 AS build

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./


# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the application
RUN npm run build

# Step 2: Serve the application using a lightweight server
FROM nginx:alpine

# Copy the build artifacts from the previous stage
COPY --from=build /app/dist /usr/share/nginx/html

# Copy a custom nginx configuration file (optional)
# COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose the port nginx is running on
EXPOSE 8000

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
