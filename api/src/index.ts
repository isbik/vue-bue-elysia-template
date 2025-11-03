import { cors } from "@elysiajs/cors";
import openapi from "@elysiajs/openapi";
import Elysia from "elysia";
import { rateLimit } from "elysia-rate-limit";
import { CONFIG } from "./config/env";
import { pool } from "./db";
import { AppHttpError } from "./lib/error";
import { logger } from "./lib/logger";
import { errorMiddleware } from "./middleware/error";
import { loggerMiddleware } from "./middleware/logger";

const app = new Elysia()
  .error({ AppHttpError })
  .use(cors())
  .use(openapi())
  .use(loggerMiddleware)
  .use(rateLimit({ duration: 60_000, max: 100 }))
  .use(errorMiddleware)
  .get("/health", () => ({ status: "ok" }))
  .listen(CONFIG.PORT);

logger.info(
  `🦊 Elysia is running at http://${app.server?.hostname}:${app.server?.port}`
);

const shutdown = async () => {
  await pool.end();
  app.stop();
};

process.on("SIGINT", shutdown);
process.on("SIGTERM", shutdown);
