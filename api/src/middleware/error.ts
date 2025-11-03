import Elysia from "elysia";
import { IS_DEV } from "../config/env";
import { AppHttpError } from "../lib/error";
import { logger } from "../lib/logger";

export const errorMiddleware = new Elysia().onError((ctx) => {
  if (IS_DEV) {
    logger.error(ctx.error);
  }

  if (ctx.error instanceof AppHttpError) {
    ctx.status(ctx.error.status);
    return ctx.error.toResponse();
  }

  if (ctx.code === "NOT_FOUND") {
    ctx.set.status = 404;
    return { message: "Not Found", code: "NOT_FOUND" };
  }

  if (ctx.code === "VALIDATION") {
    ctx.set.status = 400;
    return {
      message: "Bad Request: Validation Failed",
      code: "VALIDATION",
      error: ctx.error,
    };
  }

  if (!IS_DEV) {
    ctx.set.status = 500;
    return {
      message: "Internal Server Error",
      code: "UNKNOWN",
    };
  }

  return ctx.error;
});
