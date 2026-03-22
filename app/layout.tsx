import type { Metadata } from 'next'
import { Lora, Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { runSeederSync } from '@/lib/seeder'

const lora = Lora({
  subsets: ['latin'],
  variable: '--font-lora',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
})

// Run seeder on startup
try {
  const result = runSeederSync()
  if (result.inserted > 0) {
    console.log(`[startup] Seeded ${result.inserted} new lesson(s)`)
  }
} catch (err) {
  console.error('[startup] Seeder error:', err)
}

export const metadata: Metadata = {
  title: "Kevin's Learning Library",
  description: 'Personal learning library with AI tutor',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${lora.variable} ${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="min-h-screen bg-[#F7F4EF] text-[#1C1917]">
        {children}
      </body>
    </html>
  )
}
