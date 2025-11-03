import Elysia from "elysia";
import { logger } from "../lib/logger";

export const loggerMiddleware = new Elysia().onAfterHandle(
  ({ request, set }) => {
    const url = new URL(
      request.url,
      `http://${request.headers.get("host") || "localhost"}`
    );
    logger.info(`${request.method} ${url.pathname} ${set.status || 200}`);
  }
);
