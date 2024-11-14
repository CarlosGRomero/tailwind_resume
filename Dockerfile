# Stage 1: Build the Vite app
FROM node:16-alpine AS build

# Set working directory
WORKDIR /app

# Install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy the rest of the application files
COPY . .

# Build the application
RUN npm run build

# List the contents of /app for debugging
RUN echo "=== Debug: Contents of /app after build ===" && ls -al /app && ls -al /app/dist

# Stage 2: Serve the Vite app with Nginx
FROM nginx:stable-alpine AS production

# Copy the build output to Nginx static directory
COPY --from=build /app/dist /usr/share/nginx/html

# Copy your custom Nginx configuration (if any)
COPY nginx.conf /etc/nginx/nginx.conf

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
