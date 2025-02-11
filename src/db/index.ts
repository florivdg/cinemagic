import { Database } from 'bun:sqlite'

// Open (or create) the SQLite database file (this file will be created in your project root)
const db = new Database('file:prices.db')

// Create an `items` table to store movies and TV series, and a `price_history` table to track price changes
db.run(`
  CREATE TABLE IF NOT EXISTS items (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    type TEXT CHECK(type IN ('movie', 'tv_series')) NOT NULL
  )
`)

db.run(`
  CREATE TABLE IF NOT EXISTS price_history (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    item_id INTEGER NOT NULL,
    price REAL NOT NULL,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY(item_id) REFERENCES items(id)
  )
`)

export default db
