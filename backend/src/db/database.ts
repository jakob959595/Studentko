import Database, { type Database as BetterSqliteDatabase } from "better-sqlite3";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dbPot = path.join(__dirname, "studentko.db");

const db: Database.Database = new Database(dbPot);

db.pragma("journal_mode = WAL");
db.pragma("foreign_keys = ON");

export default db;