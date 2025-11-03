FROM oven/bun:1.3 AS base

WORKDIR /app

COPY package.json bun.lock ./
RUN bun install --production

COPY . .

EXPOSE 4001

ENV NODE_ENV=production

CMD bun run db:migrate && bun run start