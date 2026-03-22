import { NextResponse } from 'next/server'
import { getDb } from '@/lib/db'

export const dynamic = 'force-dynamic'

export async function GET(
  _req: Request,
  { params }: { params: { slug: string } }
) {
  const db = getDb()

  const track = db.prepare('SELECT * FROM tracks WHERE slug = ?').get(params.slug)
  if (!track) return NextResponse.json({ error: 'Not found' }, { status: 404 })

  const chapters = db.prepare(`
    SELECT c.*
    FROM chapters c
    WHERE c.track_id = (SELECT id FROM tracks WHERE slug = ?)
    ORDER BY c.sort_order
  `).all(params.slug)

  const lessons = db.prepare(`
    SELECT l.*,
      lp.read,
      lp.last_scroll_pct,
      COUNT(qa.id) as message_count
    FROM lessons l
    JOIN chapters c ON c.id = l.chapter_id
    LEFT JOIN lesson_progress lp ON lp.lesson_id = l.id
    LEFT JOIN qa_messages qa ON qa.lesson_id = l.id
    WHERE c.track_id = (SELECT id FROM tracks WHERE slug = ?)
    GROUP BY l.id
    ORDER BY l.sort_order
  `).all(params.slug)

  return NextResponse.json({ track, chapters, lessons })
}
