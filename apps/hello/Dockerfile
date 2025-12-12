FROM node:20 AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable
WORKDIR /app

# deps
FROM base AS deps
COPY . .
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile

# build
FROM deps AS builder
WORKDIR /app/apps/hello
RUN pnpm build

# runner
FROM node:20-alpine AS runner
WORKDIR /app
COPY --from=builder /app/apps/hello/dist ./dist
RUN addgroup -g 1001 -S appgroup && \
    adduser -S appuser -u 1001 -G appgroup
USER appuser
ENV NODE_ENV=production

ENTRYPOINT ["node", "dist/index.mjs"]