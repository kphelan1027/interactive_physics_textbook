import { NextResponse } from 'next/server'
import { getDb } from '@/lib/db'

export async function POST(
  req: Request,
  { params }: { params: { slug: string } }
) {
  const db = getDb()
  const { scroll_pct } = await req.json()

  const lesson = db.prepare('SELECT id FROM lessons WHERE slug = ?').get(params.slug) as { id: number } | undefined
  if (!lesson) return NextResponse.json({ error: 'Not found' }, { status: 404 })

  const markRead = scroll_pct >= 0.8
  const now = new Date().toISOString()

  db.prepare(`
    INSERT INTO lesson_progress (lesson_id, read, read_at, last_scroll_pct)
    VALUES (?, ?, ?, ?)
    ON CONFLICT(lesson_id) DO UPDATE SET
      last_scroll_pct = excluded.last_scroll_pct,
      read = CASE WHEN excluded.read = 1 THEN 1 ELSE read END,
      read_at = CASE WHEN excluded.read = 1 AND read = 0 THEN excluded.read_at ELSE read_at END
  `).run(lesson.id, markRead ? 1 : 0, markRead ? now : null, scroll_pct)

  return NextResponse.json({ ok: true })
}
