'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useParams } from 'next/navigation'

interface Track {
  id: number
  name: string
  slug: string
  description: string | null
  accent_hex: string
}

interface Chapter {
  id: number
  slug: string
  name: string
  sort_order: number
}

interface Lesson {
  id: number
  slug: string
  title: string
  body: string
  sort_order: number
  chapter_id: number
  read: number | null
  message_count: number
}

export default function TrackPage() {
  const { trackSlug } = useParams<{ trackSlug: string }>()
  const [track, setTrack] = useState<Track | null>(null)
  const [chapters, setChapters] = useState<Chapter[]>([])
  const [lessons, setLessons] = useState<Lesson[]>([])
  const [activeChapterId, setActiveChapterId] = useState<number | null>(null)
  const [seedMsg, setSeedMsg] = useState<string | null>(null)
  const [seeding, setSeeding] = useState(false)

  useEffect(() => {
    fetch(`/api/tracks/${trackSlug}`)
      .then((r) => r.json())
      .then((data) => {
        setTrack(data.track)
        setChapters(data.chapters)
        setLessons(data.lessons)
        if (data.chapters.length > 0) {
          setActiveChapterId(data.chapters[0].id)
        }
      })
  }, [trackSlug])

  async function handleSeed() {
    setSeeding(true)
    setSeedMsg(null)
    try {
      const res = await fetch('/api/seed', { method: 'POST' })
      const data = await res.json()
      setSeedMsg(data.inserted === 0 ? 'No new lessons found.' : `${data.inserted} new lesson(s) added.`)
      if (data.inserted > 0) {
        const updated = await fetch(`/api/tracks/${trackSlug}`).then((r) => r.json())
        setChapters(updated.chapters)
        setLessons(updated.lessons)
      }
    } catch {
      setSeedMsg('Error checking for content.')
    } finally {
      setSeeding(false)
    }
  }

  const activeChapter = chapters.find((c) => c.id === activeChapterId)
  const visibleLessons = lessons.filter((l) => l.chapter_id === activeChapterId)

  function firstSentence(body: string): string {
    const stripped = body.replace(/#+\s[^\n]*\n/g, '').replace(/>\s*/g, '').replace(/\*+/g, '').trim()
    const match = stripped.match(/^.{20,}?[.!?]/)
    return match ? match[0] : stripped.slice(0, 120)
  }

  if (!track) {
    return (
      <div className="min-h-screen bg-[#F7F4EF] flex items-center justify-center">
        <p className="font-sans text-[#6B6560]">Loading…</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#F7F4EF]">
      {/* Header */}
      <div className="border-b border-[#E2DDD6] bg-white">
        <div className="max-w-6xl mx-auto px-8 py-4 flex items-center justify-between">
          <nav className="flex items-center gap-2 font-sans text-sm text-[#6B6560]">
            <Link href="/" className="hover:text-[#1C1917] transition-colors">Library</Link>
            <span>›</span>
            <span className="text-[#1C1917] font-medium">{track.name}</span>
          </nav>
          <div className="flex items-center gap-3">
            {seedMsg && <span className="font-sans text-xs text-[#6B6560]">{seedMsg}</span>}
            <button
              onClick={handleSeed}
              disabled={seeding}
              className="font-sans text-xs text-[#6B6560] hover:text-[#1C1917] underline underline-offset-2 disabled:opacity-50 transition-colors"
            >
              {seeding ? 'Checking…' : 'Check for new content'}
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-8 py-8 flex gap-8">
        {/* Sidebar */}
        <aside className="w-56 shrink-0">
          <h2 className="font-sans text-xs font-semibold text-[#9C9490] uppercase tracking-widest mb-4">
            Chapters
          </h2>
          <ul className="space-y-1">
            {chapters.map((chapter) => (
              <li key={chapter.id}>
                <button
                  onClick={() => setActiveChapterId(chapter.id)}
                  className={`w-full text-left font-sans text-sm px-3 py-2 rounded transition-colors ${
                    chapter.id === activeChapterId
                      ? 'bg-[#F0EDE8] text-[#1C1917] font-medium'
                      : 'text-[#6B6560] hover:text-[#1C1917] hover:bg-[#F0EDE8]'
                  }`}
                >
                  {chapter.name}
                </button>
              </li>
            ))}
          </ul>
        </aside>

        {/* Main */}
        <main className="flex-1">
          {activeChapter && (
            <h1 className="font-sans text-xl font-semibold text-[#1C1917] mb-6">
              {activeChapter.name}
            </h1>
          )}
          <div className="space-y-3">
            {visibleLessons.map((lesson, idx) => (
              <Link
                key={lesson.id}
                href={`/${trackSlug}/${lesson.slug}`}
                className="block bg-white border border-[#E2DDD6] rounded p-5 hover:border-[#9C9490] transition-colors"
              >
                <div className="flex items-start gap-4">
                  <span className="font-sans text-sm text-[#9C9490] mt-0.5 w-6 shrink-0">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="font-sans font-medium text-[#1C1917]">{lesson.title}</h3>
                      {lesson.read === 1 && (
                        <span
                          className="w-2 h-2 rounded-full shrink-0"
                          style={{ backgroundColor: track.accent_hex }}
                          title="Read"
                        />
                      )}
                      {lesson.message_count > 0 && (
                        <span className="font-sans text-xs text-[#9C9490]">
                          {lesson.message_count} Q&A
                        </span>
                      )}
                    </div>
                    <p className="font-sans text-sm text-[#6B6560] leading-relaxed line-clamp-2">
                      {firstSentence(lesson.body)}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
            {visibleLessons.length === 0 && (
              <p className="font-sans text-sm text-[#9C9490] py-8 text-center">No lessons yet in this chapter.</p>
            )}
          </div>
        </main>
      </div>
    </div>
  )
}
