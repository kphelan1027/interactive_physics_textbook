'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

interface Track {
  id: number
  name: string
  slug: string
  description: string | null
  accent_hex: string
  sort_order: number
  lesson_count: number
  read_count: number
}

function TrackCard({ track }: { track: Track }) {
  const progress = track.lesson_count > 0 ? (track.read_count / track.lesson_count) * 100 : 0

  return (
    <Link href={`/${track.slug}`} className="block">
      <div
        className="bg-white rounded border border-[#E2DDD6] p-8 h-full cursor-pointer transition-all hover:border-current"
        style={{ '--hover-color': track.accent_hex } as React.CSSProperties}
      >
        <div
          className="w-1 h-12 rounded-full mb-6"
          style={{ backgroundColor: track.accent_hex }}
        />
        <h2 className="font-sans text-xl font-semibold text-[#1C1917] mb-2">{track.name}</h2>
        {track.description && (
          <p className="font-sans text-sm text-[#6B6560] mb-6 leading-relaxed">{track.description}</p>
        )}
        {!track.description && <div className="mb-6" />}
        <div className="mt-auto">
          <div className="flex justify-between items-center mb-2">
            <span className="font-sans text-xs text-[#9C9490]">
              {track.read_count} / {track.lesson_count} lessons
            </span>
            <span className="font-sans text-xs text-[#9C9490]">{Math.round(progress)}%</span>
          </div>
          <div className="h-1 bg-[#E2DDD6] rounded-full overflow-hidden">
            <div
              className="h-full rounded-full transition-all"
              style={{ width: `${progress}%`, backgroundColor: track.accent_hex }}
            />
          </div>
        </div>
      </div>
    </Link>
  )
}

export default function HomePage() {
  const [tracks, setTracks] = useState<Track[]>([])
  const [seedMsg, setSeedMsg] = useState<string | null>(null)
  const [seeding, setSeeding] = useState(false)

  useEffect(() => {
    fetch('/api/tracks').then((r) => r.json()).then(setTracks)
  }, [])

  async function handleSeed() {
    setSeeding(true)
    setSeedMsg(null)
    try {
      const res = await fetch('/api/seed', { method: 'POST' })
      const data = await res.json()
      setSeedMsg(data.inserted === 0 ? 'No new lessons found.' : `${data.inserted} new lesson(s) added.`)
      if (data.inserted > 0) {
        const updated = await fetch('/api/tracks').then((r) => r.json())
        setTracks(updated)
      }
    } catch {
      setSeedMsg('Error checking for content.')
    } finally {
      setSeeding(false)
    }
  }

  return (
    <div className="min-h-screen bg-[#F7F4EF]">
      <div className="max-w-4xl mx-auto px-8 py-12">
        <header className="mb-12 flex items-start justify-between">
          <div>
            <h1 className="font-sans text-3xl font-semibold text-[#1C1917] mb-1">Learning Library</h1>
            <p className="font-sans text-[#6B6560] text-sm">Kevin's personal study space</p>
          </div>
          <div className="flex items-center gap-3 mt-1">
            {seedMsg && (
              <span className="font-sans text-xs text-[#6B6560]">{seedMsg}</span>
            )}
            <button
              onClick={handleSeed}
              disabled={seeding}
              className="font-sans text-xs text-[#6B6560] hover:text-[#1C1917] underline underline-offset-2 disabled:opacity-50 transition-colors"
            >
              {seeding ? 'Checking…' : 'Check for new content'}
            </button>
          </div>
        </header>

        <div className="grid grid-cols-2 gap-6">
          {tracks.map((track) => (
            <TrackCard key={track.id} track={track} />
          ))}
        </div>
      </div>
    </div>
  )
}
