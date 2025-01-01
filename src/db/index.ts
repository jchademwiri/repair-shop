import { neon } from "@neondatabase/serverless";
import { config } from "dotenv";
import { drizzle } from "drizzle-orm/neon-http";

config({ path: ".env.local" });

const sql = neon(process.env.DATABASE_URL!);

// logger
// const logger = drizzle(sql, { logger: true });

const db = drizzle(sql);

export { db };
