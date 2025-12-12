# Build stage
FROM node:20-alpine AS builder

WORKDIR /app

# Copy package files and source
COPY package.json ./
COPY tsup.config.ts ./
COPY tsconfig.json ./
COPY index.ts ./

# Install all dependencies (including dev dependencies for building)
RUN npm install

# Build the application
RUN npm run build

# Verify the build output exists
RUN ls -la dist/

# Production stage
FROM node:20-alpine AS production

WORKDIR /app

# Copy only the built application
COPY --from=builder /app/dist ./dist

# Create a non-root user
RUN addgroup -g 1001 -S appgroup && \
    adduser -S appuser -u 1001 -G appgroup

USER appuser

# Set the default command
ENTRYPOINT ["node", "dist/index.js"]