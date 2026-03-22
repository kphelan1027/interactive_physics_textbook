import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#F7F4EF',
        surface: '#FFFFFF',
        'surface-alt': '#F0EDE8',
        border: '#E2DDD6',
        'text-primary': '#1C1917',
        'text-secondary': '#6B6560',
        'text-tertiary': '#9C9490',
        accent: '#2563EB',
        'accent-light': '#EFF6FF',
      },
      fontFamily: {
        serif: ['var(--font-lora)', 'Georgia', 'serif'],
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-jetbrains)', 'monospace'],
      },
      fontSize: {
        'lesson': ['18px', { lineHeight: '1.75' }],
      },
      maxWidth: {
        'lesson': '720px',
      },
    },
  },
  plugins: [],
}

export default config
