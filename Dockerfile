# Development image: dependencies are installed here, source code is bind-mounted
# by docker-compose.yml so edits on the host trigger Fast Refresh in the container.
FROM node:22-slim

ENV NEXT_TELEMETRY_DISABLED=1

# pnpm version comes from "packageManager" in package.json
RUN corepack enable

WORKDIR /app

COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
RUN pnpm install --frozen-lockfile

EXPOSE 3000

# Bind to 0.0.0.0 so the dev server is reachable from outside the container.
CMD ["pnpm", "dev", "--hostname", "0.0.0.0", "--port", "3000"]
