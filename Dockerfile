# Build stage
FROM node:18-alpine as build

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install ALL dependencies (including devDependencies for build)
RUN npm ci

# Copy source code
COPY . .

# Build both frontend and backend
RUN npm run build

# Production stage
FROM node:18-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install production dependencies only
RUN npm ci --omit=dev

# Copy entire dist folder from build stage
COPY --from=build /app/dist ./dist

# Expose the port
EXPOSE 9000

ENV NODE_ENV=production

# Start the production server
CMD ["node", "dist/index.js"]