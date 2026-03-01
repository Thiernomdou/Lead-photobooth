import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          50:  '#FBF7ED',
          100: '#F4E8C8',
          200: '#E8D090',
          300: '#DCB858',
          400: '#C9A84C',
          500: '#A07830',
          600: '#7A5820',
          700: '#584014',
          800: '#38280C',
          900: '#1C1404',
        },
      },
      fontFamily: {
        sans:  ['var(--font-inter)',     'system-ui', 'sans-serif'],
        serif: ['var(--font-playfair)', 'Georgia',   'serif'],
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
      },
    },
  },
  plugins: [],
}

export default config
