import { NextResponse } from 'next/server'
import { getDb } from '@/lib/db'

export const dynamic = 'force-dynamic'

export async function GET() {
  const db = getDb()

  const tracks = db.prepare(`
    SELECT t.*,
      COUNT(DISTINCT l.id) as lesson_count,
      COUNT(DISTINCT lp.id) FILTER (WHERE lp.read = 1) as read_count
    FROM tracks t
    LEFT JOIN chapters c ON c.track_id = t.id
    LEFT JOIN lessons l ON l.chapter_id = c.id
    LEFT JOIN lesson_progress lp ON lp.lesson_id = l.id
    GROUP BY t.id
    ORDER BY t.sort_order
  `).all()

  return NextResponse.json(tracks)
}
