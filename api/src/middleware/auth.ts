import Elysia from "elysia";
import { AppHttpError } from "../lib/error";
import { decodeAuthJwt } from "../lib/jwt";

export const authMiddleware = new Elysia().derive(
  { as: "scoped" },
  async ({ cookie: { auth } }) => {
    if (!auth.value) {
      throw new AppHttpError({
        status: 401,
        message: "Unauthorized",
        code: "UNAUTHORIZED",
      });
    }

    try {
      const { userId } = await decodeAuthJwt(auth.value as string);

      if (!userId) {
        throw new AppHttpError({
          status: 401,
          message: "Unauthorized",
          code: "UNAUTHORIZED",
        });
      }

      return {
        userId: Number(userId),
      };
    } catch (error) {
      throw new AppHttpError({
        status: 401,
        message: "Unauthorized",
        code: "UNAUTHORIZED",
      });
    }
  }
);
