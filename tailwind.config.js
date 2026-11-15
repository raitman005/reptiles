/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    // Only buttons are rounded: everything else stays sharp and editorial.
    // Use `rounded-full` exclusively on buttons.
    borderRadius: {
      none: '0',
      DEFAULT: '0',
      full: '9999px',
    },
    extend: {
      colors: {
        forest: {
          950: '#07120d',
          900: '#0b1a14',
          800: '#10251c',
          700: '#17352a',
          600: '#1f4a39',
        },
        charcoal: {
          900: '#141715',
          800: '#1a1d1b',
          700: '#252a27',
        },
        sand: {
          50: '#f5f1e6',
          100: '#e8e0cf',
          300: '#c9bea4',
          500: '#9b9179',
        },
        moss: '#9bbf6f',
        amber: { glow: '#e0a93e' },
      },
      fontFamily: {
        serif: ['Fraunces', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(28px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scrollCue: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
        slowZoom: {
          '0%': { transform: 'scale(1.05)' },
          '100%': { transform: 'scale(1.15)' },
        },
      },
      animation: {
        fadeUp: 'fadeUp 0.9s cubic-bezier(0.22, 1, 0.36, 1) both',
        scrollCue: 'scrollCue 1.8s ease-in-out infinite',
        slowZoom: 'slowZoom 24s ease-in-out infinite alternate',
      },
    },
  },
  plugins: [],
}
