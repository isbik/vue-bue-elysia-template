import { jwtVerify, SignJWT } from "jose";
import { CONFIG } from "../config/env";
import { logger } from "./logger";

const secret = new TextEncoder().encode(CONFIG.JWT_SECRET);

type JWTPayload = { userId: number };

export const signAuthJwt = (payload: JWTPayload) => {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("7d")
    .sign(secret)
    .catch((err) => {
      logger.error({
        message: "Error signing JWT",
        error: err,
      });
      throw err;
    });
};

export const decodeAuthJwt = async (token: string) => {
  const { payload } = await jwtVerify<JWTPayload>(token, secret);
  return payload;
};
