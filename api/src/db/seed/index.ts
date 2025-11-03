import { sql } from "drizzle-orm";
import { reset } from "drizzle-seed";
import { db } from "..";
import * as schema from "../schema";

async function main() {
  await reset(db, schema);

  await db.execute(sql`
    DO $$
    DECLARE seq RECORD;
    BEGIN
      FOR seq IN SELECT relname FROM pg_class WHERE relkind = 'S' LOOP
        EXECUTE 'ALTER SEQUENCE ' || seq.relname || ' RESTART WITH 1';
      END LOOP;
    END;
    $$;
  `);

  process.exit(0);
}

main();
