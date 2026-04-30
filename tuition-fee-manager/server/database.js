import Database from "better-sqlite3";
import path from "path";
import { DEFAULT_CIPHERS } from "tls";

const db = new Database("tution.db");

db.prepare(`
        CREATE TABLE IF NOT EXISTS student (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            phone TEXT ,
            month TEXT NOT NULL,
            paid INTEGER DEFAULT 0
        )
    `).run();

export default db;