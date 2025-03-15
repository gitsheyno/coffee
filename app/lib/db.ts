// lib/db.ts
import { createClient } from "@libsql/client";

// Create a singleton for database connection
const db = createClient({
  url: process.env.TURSO_DATABASE_URL!,
  authToken: process.env.TURSO_AUTH_TOKEN!,
});

export { db };
