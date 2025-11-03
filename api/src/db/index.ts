import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import { logger } from "../lib/logger";
import * as schema from "./schema";

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL is not defined");
}

const pool = new Pool({
  connectionString: process.env.DATABASE_URL!,
});

pool
  .connect()
  .then((client) => client.release())
  .catch((err) => {
    logger.error({
      message: "Error connecting to database",
      error: err,
    });

    process.exit(1);
  });

const db = drizzle(pool, {
  schema,
});

export { db, pool };
