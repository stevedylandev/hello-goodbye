# Build stage
FROM node:20-alpine AS builder

WORKDIR /app

# Copy package files
COPY package.json tsdown.config.ts tsconfig.json ./
COPY index.ts ./

# Install dependencies
RUN npm install

# Build the application
RUN npm run build

# Production stage
FROM node:20-alpine AS production

WORKDIR /app

# Copy only the built application
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package.json ./

# Create a non-root user
RUN addgroup -g 1001 -S appgroup && \
    adduser -S appuser -u 1001 -G appgroup

USER appuser

# Set the default command
ENTRYPOINT ["node", "dist/index.js"]