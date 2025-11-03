import { Static, Type } from "@sinclair/typebox";
import { Value } from "@sinclair/typebox/value";
import { logger } from "../lib/logger";

const EnvSchema = Type.Object({
  DATABASE_URL: Type.String({ minLength: 1 }),
  JWT_SECRET: Type.String({ default: "your_jwt_secret" }),
  PORT: Type.Number({ default: 4001 }),
  NODE_ENV: Type.Optional(
    Type.Union([
      Type.Literal("development"),
      Type.Literal("production"),
      Type.Literal("test"),
    ])
  ),
  OPENAI_API_KEY: Type.String({ default: "" }),
});

const CONFIG = Value.Default(EnvSchema, {
  ...process.env,
  PORT: process.env.PORT ? Number(process.env.PORT) : undefined,
}) as Static<typeof EnvSchema>;

if (!Value.Check(EnvSchema, CONFIG)) {
  const errors = [...Value.Errors(EnvSchema, CONFIG)];

  logger.error("❌ Invalid environment variables:");

  errors.forEach((err) => {
    console.log("🚀 ~ err:", err);
    logger.error(`  - ${err.path}: ${err.message}`);
  });

  process.exit(1);
}

const IS_DEV = CONFIG.NODE_ENV === "development";

export { CONFIG, IS_DEV };
