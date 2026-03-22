import Database from 'better-sqlite3'
import path from 'path'

let _db: Database.Database | null = null

export function getDb(): Database.Database {
  if (_db) return _db

  const dbPath = path.join(process.cwd(), 'learning.db')
  _db = new Database(dbPath)

  _db.pragma('journal_mode = WAL')
  _db.pragma('foreign_keys = ON')

  _db.exec(`
    CREATE TABLE IF NOT EXISTS tracks (
      id INTEGER PRIMARY KEY,
      name TEXT NOT NULL,
      slug TEXT UNIQUE NOT NULL,
      description TEXT,
      accent_hex TEXT,
      icon TEXT,
      sort_order INTEGER
    );

    CREATE TABLE IF NOT EXISTS chapters (
      id INTEGER PRIMARY KEY,
      track_id INTEGER REFERENCES tracks(id),
      name TEXT NOT NULL,
      slug TEXT UNIQUE NOT NULL,
      description TEXT,
      sort_order INTEGER
    );

    CREATE TABLE IF NOT EXISTS lessons (
      id INTEGER PRIMARY KEY,
      chapter_id INTEGER REFERENCES chapters(id),
      title TEXT NOT NULL,
      slug TEXT UNIQUE NOT NULL,
      body TEXT NOT NULL,
      visual_url TEXT,
      visual_caption TEXT,
      worked_example TEXT,
      open_question TEXT,
      source_file TEXT UNIQUE NOT NULL,
      sort_order INTEGER,
      created_at TEXT DEFAULT (datetime('now'))
    );

    CREATE TABLE IF NOT EXISTS qa_messages (
      id INTEGER PRIMARY KEY,
      lesson_id INTEGER REFERENCES lessons(id),
      role TEXT NOT NULL CHECK(role IN ('user','assistant')),
      content TEXT NOT NULL,
      created_at TEXT DEFAULT (datetime('now'))
    );

    CREATE TABLE IF NOT EXISTS lesson_progress (
      id INTEGER PRIMARY KEY,
      lesson_id INTEGER UNIQUE REFERENCES lessons(id),
      read INTEGER DEFAULT 0,
      read_at TEXT,
      last_scroll_pct REAL DEFAULT 0
    );
  `)

  return _db
}
