'use client'

import { useEffect, useRef, useState, useCallback } from 'react'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'

interface Lesson {
  id: number
  title: string
  slug: string
  body: string
  visual_url: string | null
  visual_caption: string | null
  worked_example: string | null
  open_question: string | null
  chapter_name: string
  chapter_slug: string
  track_name: string
  track_slug: string
  accent_hex: string
}

interface QAMessage {
  id: number
  role: 'user' | 'assistant'
  content: string
  created_at: string
}

interface Progress {
  read: number
  last_scroll_pct: number
}

const MD_PLUGINS = {
  remarkPlugins: [remarkGfm, remarkMath],
  rehypePlugins: [rehypeKatex],
}

export default function LessonPage() {
  const { trackSlug, lessonSlug } = useParams<{ trackSlug: string; lessonSlug: string }>()

  const [lesson, setLesson] = useState<Lesson | null>(null)
  const [messages, setMessages] = useState<QAMessage[]>([])
  const [progress, setProgress] = useState<Progress | null>(null)
  const [input, setInput] = useState('')
  const [streaming, setStreaming] = useState(false)
  const [streamingText, setStreamingText] = useState('')
  const [markedRead, setMarkedRead] = useState(false)

  const contentRef = useRef<HTMLDivElement>(null)
  const qaBottomRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLTextAreaElement>(null)
  const scrollReportedRef = useRef(false)

  // Load lesson data
  useEffect(() => {
    fetch(`/api/lessons/${lessonSlug}`)
      .then((r) => r.json())
      .then((data) => {
        setLesson(data.lesson)
        setMessages(data.messages ?? [])
        setProgress(data.progress)
      })
  }, [lessonSlug])

  // Restore scroll position
  useEffect(() => {
    if (!lesson || !contentRef.current) return
    const saved = localStorage.getItem(`scroll:${lessonSlug}`)
    if (saved) {
      const pct = parseFloat(saved)
      const el = contentRef.current
      el.scrollTop = pct * (el.scrollHeight - el.clientHeight)
    }
  }, [lesson, lessonSlug])

  // Scroll-to-bottom in Q&A when messages change
  useEffect(() => {
    qaBottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, streamingText])

  // Track scroll progress
  const handleContentScroll = useCallback(() => {
    const el = contentRef.current
    if (!el || !lesson) return
    const pct = el.scrollTop / Math.max(1, el.scrollHeight - el.clientHeight)
    localStorage.setItem(`scroll:${lessonSlug}`, String(pct))

    if (pct >= 0.8 && !markedRead && !scrollReportedRef.current) {
      scrollReportedRef.current = true
      setMarkedRead(true)
      fetch(`/api/lessons/${lessonSlug}/progress`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ scroll_pct: pct }),
      })
    }
  }, [lesson, lessonSlug, markedRead])

  async function submitMessage(text: string) {
    if (!text.trim() || streaming) return
    const userMsg: QAMessage = {
      id: Date.now(),
      role: 'user',
      content: text.trim(),
      created_at: new Date().toISOString(),
    }
    setMessages((prev) => [...prev, userMsg])
    setInput('')
    setStreaming(true)
    setStreamingText('')

    try {
      const res = await fetch(`/api/lessons/${lessonSlug}/qa`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: text.trim() }),
      })

      if (!res.body) throw new Error('No stream body')

      const reader = res.body.getReader()
      const decoder = new TextDecoder()
      let full = ''

      while (true) {
        const { done, value } = await reader.read()
        if (done) break
        const chunk = decoder.decode(value, { stream: true })
        full += chunk
        setStreamingText(full)
      }

      const assistantMsg: QAMessage = {
        id: Date.now() + 1,
        role: 'assistant',
        content: full,
        created_at: new Date().toISOString(),
      }
      setMessages((prev) => [...prev, assistantMsg])
      setStreamingText('')
    } catch (err) {
      console.error('Stream error:', err)
    } finally {
      setStreaming(false)
    }
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      submitMessage(input)
    }
  }

  function handleDepthControl(suffix: string) {
    submitMessage(suffix)
  }

  function handlePreFill(text: string) {
    setInput(text)
    inputRef.current?.focus()
  }

  if (!lesson) {
    return (
      <div className="min-h-screen bg-[#F7F4EF] flex items-center justify-center">
        <p className="font-sans text-[#6B6560]">Loading…</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#F7F4EF] flex flex-col">
      {/* Breadcrumb bar */}
      <div className="border-b border-[#E2DDD6] bg-white shrink-0">
        <div className="px-12 py-3">
          <nav className="flex items-center gap-2 font-sans text-sm text-[#6B6560]">
            <Link href="/" className="hover:text-[#1C1917] transition-colors">Library</Link>
            <span>›</span>
            <Link href={`/${lesson.track_slug}`} className="hover:text-[#1C1917] transition-colors">
              {lesson.track_name}
            </Link>
            <span>›</span>
            <Link href={`/${lesson.track_slug}`} className="hover:text-[#1C1917] transition-colors">
              {lesson.chapter_name}
            </Link>
            <span>›</span>
            <span className="text-[#1C1917]">{lesson.title}</span>
            {markedRead && (
              <span
                className="ml-2 w-2 h-2 rounded-full inline-block"
                style={{ backgroundColor: lesson.accent_hex }}
                title="Read"
              />
            )}
          </nav>
        </div>
      </div>

      {/* Two-column layout */}
      <div className="flex flex-1 overflow-hidden">
        {/* Content pane — 65% */}
        <div
          ref={contentRef}
          onScroll={handleContentScroll}
          className="w-[65%] overflow-y-auto"
          style={{ paddingTop: '48px', paddingLeft: '64px', paddingRight: '64px', paddingBottom: '64px' }}
        >
          <div className="max-w-[720px]">
            <h1 className="font-sans text-2xl font-semibold text-[#1C1917] mb-8 leading-tight">
              {lesson.title}
            </h1>

            <div className="lesson-body">
              <ReactMarkdown {...MD_PLUGINS}>
                {lesson.body}
              </ReactMarkdown>
            </div>

            {/* Visual */}
            {lesson.visual_url && (
              <div className="my-8">
                <img
                  src={lesson.visual_url}
                  alt={lesson.visual_caption ?? lesson.title}
                  className="rounded border border-[#E2DDD6] w-full"
                />
                {lesson.visual_caption && (
                  <p className="font-sans text-sm text-[#6B6560] mt-2 text-center italic">
                    {lesson.visual_caption}
                  </p>
                )}
              </div>
            )}

            {/* Worked Example */}
            {lesson.worked_example && (
              <div
                className="my-8 rounded p-6"
                style={{
                  backgroundColor: '#F0EDE8',
                  borderLeft: '3px solid #2563EB',
                }}
              >
                <div
                  className="font-sans font-bold text-[#2563EB] mb-3"
                  style={{ fontSize: '11px', letterSpacing: '0.08em' }}
                >
                  EXAMPLE
                </div>
                <div className="lesson-body">
                  <ReactMarkdown {...MD_PLUGINS}>{lesson.worked_example}</ReactMarkdown>
                </div>
              </div>
            )}

            {/* Open Question */}
            {lesson.open_question && (
              <div
                className="my-8 pl-4"
                style={{ borderLeft: '2px solid #E2DDD6' }}
              >
                <div className="lesson-body italic text-[#6B6560]">
                  <ReactMarkdown {...MD_PLUGINS}>{lesson.open_question}</ReactMarkdown>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Q&A pane — 35% */}
        <div
          className="w-[35%] border-l border-[#E2DDD6] bg-white flex flex-col"
          style={{ borderLeftWidth: '1px' }}
        >
          {/* Q&A header with lesson-level depth controls */}
          <div className="px-5 py-4 border-b border-[#E2DDD6] shrink-0">
            <h2 className="font-sans text-sm font-semibold text-[#1C1917] mb-2">Q&A</h2>
            <div className="flex gap-4">
              <button
                onClick={() => submitMessage('Go deeper on this lesson. What are the most important nuances or depth I should understand here?')}
                disabled={streaming}
                className="font-sans text-xs text-[#6B6560] hover:text-[#2563EB] transition-colors disabled:opacity-40"
              >
                Go deeper on this lesson
              </button>
              <button
                onClick={() => submitMessage('Simplify this lesson for me. Rebuild the core intuition from first principles.')}
                disabled={streaming}
                className="font-sans text-xs text-[#6B6560] hover:text-[#2563EB] transition-colors disabled:opacity-40"
              >
                Simplify this lesson
              </button>
            </div>
          </div>

          {/* Message thread */}
          <div className="flex-1 overflow-y-auto px-5 py-4 space-y-4">
            {messages.length === 0 && !streaming && lesson.open_question && (
              <div
                className="rounded p-4 cursor-pointer border border-[#E2DDD6] hover:border-[#9C9490] transition-colors"
                style={{ backgroundColor: '#F0EDE8' }}
                onClick={() => handlePreFill(lesson.open_question!.replace(/\*+/g, '').replace(/^>\s*/gm, '').trim())}
              >
                <p className="font-sans text-xs font-semibold text-[#6B6560] mb-2 uppercase tracking-wide">
                  Open Question
                </p>
                <p className="font-sans text-sm text-[#1C1917] leading-relaxed line-clamp-3">
                  {lesson.open_question.replace(/\*+/g, '').replace(/^>\s*/gm, '').trim()}
                </p>
                <p className="font-sans text-xs text-[#2563EB] mt-2">Ask this question →</p>
              </div>
            )}

            {messages.map((msg, i) => (
              <div key={msg.id}>
                {msg.role === 'user' ? (
                  <div
                    className="rounded-lg p-3"
                    style={{ backgroundColor: '#EFF6FF' }}
                  >
                    <p className="font-sans text-sm text-[#1C1917] whitespace-pre-wrap">{msg.content}</p>
                  </div>
                ) : (
                  <div>
                    <div
                      className="pl-3 py-1"
                      style={{ borderLeft: '2px solid #E2DDD6', backgroundColor: '#FFFFFF' }}
                    >
                      <div className="qa-prose">
                        <ReactMarkdown {...MD_PLUGINS}>{msg.content}</ReactMarkdown>
                      </div>
                    </div>
                    {/* Per-message depth controls */}
                    {i === messages.length - 1 && (
                      <div className="flex gap-4 mt-2 pl-3">
                        <button
                          onClick={() => handleDepthControl('Go deeper on your previous answer.')}
                          disabled={streaming}
                          className="font-sans text-xs text-[#9C9490] hover:text-[#2563EB] transition-colors disabled:opacity-40"
                        >
                          Go Deeper
                        </button>
                        <button
                          onClick={() => handleDepthControl('Simplify your previous answer.')}
                          disabled={streaming}
                          className="font-sans text-xs text-[#9C9490] hover:text-[#2563EB] transition-colors disabled:opacity-40"
                        >
                          Simplify This
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}

            {/* Streaming message */}
            {streaming && streamingText && (
              <div
                className="pl-3 py-1"
                style={{ borderLeft: '2px solid #E2DDD6' }}
              >
                <div className="qa-prose">
                  <ReactMarkdown {...MD_PLUGINS}>{streamingText}</ReactMarkdown>
                </div>
              </div>
            )}
            {streaming && !streamingText && (
              <div className="pl-3">
                <span className="font-sans text-sm text-[#9C9490]">Thinking…</span>
              </div>
            )}

            <div ref={qaBottomRef} />
          </div>

          {/* Input area */}
          <div className="px-4 py-3 border-t border-[#E2DDD6] shrink-0">
            <textarea
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              disabled={streaming}
              placeholder="Ask a question… (Enter to send, Shift+Enter for newline)"
              rows={3}
              className="w-full font-sans text-sm text-[#1C1917] bg-[#F7F4EF] border border-[#E2DDD6] rounded px-3 py-2 resize-none focus:outline-none focus:border-[#9C9490] placeholder:text-[#9C9490] disabled:opacity-50 transition-colors"
            />
            <div className="flex justify-end mt-2">
              <button
                onClick={() => submitMessage(input)}
                disabled={streaming || !input.trim()}
                className="font-sans text-sm font-medium text-white px-4 py-1.5 rounded transition-colors disabled:opacity-40"
                style={{ backgroundColor: '#2563EB' }}
              >
                {streaming ? 'Streaming…' : 'Send'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
