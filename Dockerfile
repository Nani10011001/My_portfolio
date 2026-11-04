# Stage 1: Build React application
FROM node:20-alpine AS build

WORKDIR /portfolio2

# Copy dependency files first
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy application source
COPY . .

# Build production bundle
RUN npm run build


# Stage 2: Production server
FROM nginx:alpine

# Copy production build into Nginx
COPY --from=build /portfolio2/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]