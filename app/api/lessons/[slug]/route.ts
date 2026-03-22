import { NextResponse } from 'next/server'
import { getDb } from '@/lib/db'

export const dynamic = 'force-dynamic'

export async function GET(
  _req: Request,
  { params }: { params: { slug: string } }
) {
  const db = getDb()

  const lesson = db.prepare(`
    SELECT l.*, c.name as chapter_name, c.slug as chapter_slug,
      t.name as track_name, t.slug as track_slug, t.accent_hex
    FROM lessons l
    JOIN chapters c ON c.id = l.chapter_id
    JOIN tracks t ON t.id = c.track_id
    WHERE l.slug = ?
  `).get(params.slug)

  if (!lesson) return NextResponse.json({ error: 'Not found' }, { status: 404 })

  const messages = db.prepare(`
    SELECT * FROM qa_messages WHERE lesson_id = ? ORDER BY created_at
  `).all((lesson as any).id)

  const progress = db.prepare(`
    SELECT * FROM lesson_progress WHERE lesson_id = ?
  `).get((lesson as any).id)

  return NextResponse.json({ lesson, messages, progress: progress ?? null })
}
