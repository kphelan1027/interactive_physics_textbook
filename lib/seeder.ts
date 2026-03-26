import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { getDb } from './db'

const TRACK_META: Record<string, { name: string; accent_hex: string; sort_order: number }> = {
  technical: { name: 'Technical / Coding', accent_hex: '#0F766E', sort_order: 1 },
  accounting: { name: 'Accounting & Finance', accent_hex: '#15803D', sort_order: 2 },
  llm: { name: 'LLMs & AI', accent_hex: '#7C3AED', sort_order: 3 },
  physics: { name: 'Physics', accent_hex: '#B45309', sort_order: 4 },
  jtbd: { name: 'JTBD & Bobby Moesta', accent_hex: '#DC2626', sort_order: 5 },
}

const CHAPTER_META: Record<string, { name: string; track: string; sort_order: number }> = {
  'databases-and-sql': { name: 'Databases & SQL', track: 'technical', sort_order: 1 },
  'revenue-recognition': { name: 'Revenue Recognition', track: 'accounting', sort_order: 1 },
  foundations: { name: 'Foundations', track: 'llm', sort_order: 1 },
  mechanics: { name: 'Mechanics', track: 'physics', sort_order: 1 },
  'jobs-to-be-done': { name: 'Jobs to Be Done', track: 'jtbd', sort_order: 1 },
}

// Legacy track → chapter mapping
const TRACK_CHAPTER_MAP: Record<string, string> = {
  technical: 'databases-and-sql',
  accounting: 'revenue-recognition',
  llm: 'foundations',
  physics: 'mechanics',
  jtbd: 'jobs-to-be-done',
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
}

function extractSection(body: string, heading: string): string | null {
  const regex = new RegExp(`##\\s+${heading}\\s*\\n([\\s\\S]*?)(?=\\n##\\s|$)`, 'i')
  const match = body.match(regex)
  if (!match) return null
  return match[1].trim()
}

function stripSectionFromBody(body: string, heading: string): string {
  const regex = new RegExp(`\\n##\\s+${heading}\\s*\\n[\\s\\S]*?(?=\\n##\\s|$)`, 'gi')
  return body.replace(regex, '').trim()
}

function upsertTrack(slug: string): number {
  const db = getDb()
  const meta = TRACK_META[slug] ?? { name: slug, accent_hex: '#6B7280', sort_order: 99 }
  db.prepare(`
    INSERT INTO tracks (slug, name, accent_hex, sort_order)
    VALUES (?, ?, ?, ?)
    ON CONFLICT(slug) DO UPDATE SET name=excluded.name
  `).run(slug, meta.name, meta.accent_hex, meta.sort_order)
  const row = db.prepare('SELECT id FROM tracks WHERE slug = ?').get(slug) as { id: number }
  return row.id
}

function upsertChapter(slug: string, trackId: number): number {
  const db = getDb()
  const meta = CHAPTER_META[slug] ?? { name: slug, track: '', sort_order: 99 }
  db.prepare(`
    INSERT INTO chapters (slug, track_id, name, sort_order)
    VALUES (?, ?, ?, ?)
    ON CONFLICT(slug) DO UPDATE SET name=excluded.name
  `).run(slug, trackId, meta.name, meta.sort_order)
  const row = db.prepare('SELECT id FROM chapters WHERE slug = ?').get(slug) as { id: number }
  return row.id
}

function scanFiles(dir: string, baseDir: string): string[] {
  const results: string[] = []
  if (!fs.existsSync(dir)) return results
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      results.push(...scanFiles(fullPath, baseDir))
    } else if (entry.name.endsWith('.md') && !entry.name.startsWith('_')) {
      results.push(path.relative(baseDir, fullPath))
    }
  }
  return results
}

export async function runSeeder(): Promise<{ inserted: number }> {
  return runSeederSync()
}

export function runSeederSync(): { inserted: number } {
  const db = getDb()
  const contentDir = path.join(process.cwd(), 'content')
  const files = scanFiles(contentDir, contentDir)

  let inserted = 0

  for (const relPath of files) {
    // Skip if already in DB
    const existing = db.prepare('SELECT id FROM lessons WHERE source_file = ?').get(relPath)
    if (existing) continue

    const fullPath = path.join(contentDir, relPath)
    const raw = fs.readFileSync(fullPath, 'utf-8')
    const { data: fm, content } = matter(raw)

    // Detect format
    const isLegacy = 'session' in fm && !('chapter' in fm)

    let trackSlug: string = fm.track ?? 'technical'
    let chapterSlug: string
    let sortOrder: number
    let lessonTitle: string = fm.title ?? path.basename(relPath, '.md')
    let workedExample: string | null = null
    let openQuestion: string | null = null
    let body = content

    if (isLegacy) {
      chapterSlug = TRACK_CHAPTER_MAP[trackSlug] ?? 'foundations'
      sortOrder = Number(fm.session ?? 1)
      workedExample = extractSection(content, 'Worked Example')
      openQuestion = extractSection(content, 'Open Question')
      if (openQuestion) {
        body = stripSectionFromBody(content, 'Open Question')
      }
      if (workedExample) {
        body = stripSectionFromBody(body, 'Worked Example')
      }
    } else {
      chapterSlug = String(fm.chapter ?? 'foundations')
      sortOrder = Number(fm.order ?? 1)
    }

    const trackId = upsertTrack(trackSlug)
    const chapterId = upsertChapter(chapterSlug, trackId)

    // Build lesson slug from title
    const lessonSlug = slugify(lessonTitle)

    // Handle slug collisions
    let finalSlug = lessonSlug
    let attempt = 1
    while (db.prepare('SELECT id FROM lessons WHERE slug = ?').get(finalSlug)) {
      finalSlug = `${lessonSlug}-${++attempt}`
    }

    db.prepare(`
      INSERT INTO lessons (chapter_id, title, slug, body, visual_url, visual_caption, worked_example, open_question, source_file, sort_order)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `).run(
      chapterId,
      lessonTitle,
      finalSlug,
      body.trim(),
      fm.visual && typeof fm.visual === 'string' ? fm.visual : null,
      fm.visual_caption ?? null,
      workedExample,
      openQuestion ?? null,
      relPath,
      sortOrder,
    )

    inserted++
  }

  if (inserted > 0) {
    console.log(`[seeder] Inserted ${inserted} new lesson(s)`)
  }

  return { inserted }
}
