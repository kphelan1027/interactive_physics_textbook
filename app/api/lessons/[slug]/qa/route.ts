import { NextResponse } from 'next/server'
import { getDb } from '@/lib/db'
import Anthropic from '@anthropic-ai/sdk'

export const dynamic = 'force-dynamic'

export async function GET(
  _req: Request,
  { params }: { params: { slug: string } }
) {
  const db = getDb()
  const lesson = db.prepare('SELECT id FROM lessons WHERE slug = ?').get(params.slug) as { id: number } | undefined
  if (!lesson) return NextResponse.json({ error: 'Not found' }, { status: 404 })

  const messages = db.prepare('SELECT * FROM qa_messages WHERE lesson_id = ? ORDER BY created_at').all(lesson.id)
  return NextResponse.json(messages)
}

export async function POST(
  req: Request,
  { params }: { params: { slug: string } }
) {
  const db = getDb()
  const { message } = await req.json()

  const lesson = db.prepare(`
    SELECT l.*, t.name as track_name
    FROM lessons l
    JOIN chapters c ON c.id = l.chapter_id
    JOIN tracks t ON t.id = c.track_id
    WHERE l.slug = ?
  `).get(params.slug) as any

  if (!lesson) return NextResponse.json({ error: 'Not found' }, { status: 404 })

  // Save user message
  db.prepare('INSERT INTO qa_messages (lesson_id, role, content) VALUES (?, ?, ?)').run(lesson.id, 'user', message)

  // Load prior thread for context
  const priorMessages = db.prepare(
    'SELECT role, content FROM qa_messages WHERE lesson_id = ? ORDER BY created_at'
  ).all(lesson.id) as Array<{ role: string; content: string }>

  // Build thread history string (excluding the just-inserted user message for the prompt variable)
  const threadHistory = priorMessages
    .slice(0, -1)
    .map((m) => `${m.role === 'user' ? 'Kevin' : 'Tutor'}: ${m.content}`)
    .join('\n\n')

  const systemPrompt = `You are a patient, brilliant tutor. You are talking to Kevin — a first-principles
thinker who works at Memrise as a senior leader. He learns by asking "but why does
that actually work?" He is not intimidated by depth, but he needs depth to be earned,
not deployed as a wall.

Voice:
- Conversational prose only. No bullet lists unless the structure genuinely demands it.
- No "Great question!" or sycophantic openers. Just answer.
- Be direct. Kevin finds hedging and over-qualification frustrating.
- Use concrete examples grounded in things Kevin knows: Memrise's business, code he's
  seen before, AI tools he uses daily. Abstract examples only when no concrete one exists.

Depth:
- Start at the right level: intelligent adult who hasn't studied this formally.
- Never simplify without being asked. Never over-explain what's obvious.
- Be honest about what is genuinely weird, counterintuitive, or unresolved.
- If Kevin asks "Go Deeper" — go genuinely deeper. Mathematics, edge cases, history.
- If Kevin asks "Simplify This" — rebuild intuition from first principles.

Format:
- Earn mathematical notation — only when it illuminates.
- No headers in Q&A responses. Answers are prose.
- One idea at a time.

Current lesson: ${lesson.title} (${lesson.track_name})
Lesson content:
${lesson.body}

Prior Q&A in this thread:
${threadHistory || '(none yet)'}`

  const apiKey = process.env.ANTHROPIC_API_KEY
  if (!apiKey) {
    return NextResponse.json({ error: 'ANTHROPIC_API_KEY not set' }, { status: 500 })
  }

  const client = new Anthropic({ apiKey })

  // Build messages for the API (all prior + new user message)
  const apiMessages = priorMessages.map((m) => ({
    role: m.role as 'user' | 'assistant',
    content: m.content,
  }))

  const encoder = new TextEncoder()
  let fullResponse = ''

  const stream = new ReadableStream({
    async start(controller) {
      try {
        const anthropicStream = await client.messages.stream({
          model: 'claude-opus-4-6',
          max_tokens: 2048,
          system: systemPrompt,
          messages: apiMessages,
        })

        for await (const event of anthropicStream) {
          if (
            event.type === 'content_block_delta' &&
            event.delta.type === 'text_delta'
          ) {
            const text = event.delta.text
            fullResponse += text
            controller.enqueue(encoder.encode(text))
          }
        }

        // Save assistant response after stream completes
        db.prepare('INSERT INTO qa_messages (lesson_id, role, content) VALUES (?, ?, ?)').run(
          lesson.id,
          'assistant',
          fullResponse,
        )
      } catch (err) {
        controller.error(err)
      } finally {
        controller.close()
      }
    },
  })

  return new Response(stream, {
    headers: {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',
      'X-Accel-Buffering': 'no',
    },
  })
}
