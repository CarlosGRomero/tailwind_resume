# Stage 1: Build the React app
FROM node:14-alpine AS build

# Set working directory
WORKDIR /app

# Install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy the rest of the application files
COPY . .

# Build the application
RUN npm run build

# Stage 2: Serve the React app with Nginx
FROM nginx:stable-alpine AS production

# Copy the build output to Nginx static directory
COPY --from=build /app/dist /usr/share/nginx/html

# Copy your custom Nginx configuration (if any)
COPY nginx.conf /etc/nginx/nginx.conf

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
