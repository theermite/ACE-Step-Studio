/** @type {import('tailwindcss').Config} */
// Ported from the former inline `tailwind.config` in index.html so the styles
// are compiled locally (offline) instead of loaded from the Tailwind Play CDN.
module.exports = {
  content: [
    './index.html',
    './*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './context/**/*.{ts,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        suno: {
          DEFAULT: '#09090b',
          sidebar: '#000000',
          panel: '#121214',
          card: '#18181b',
          hover: '#27272a',
          border: '#27272a',
        },
        // Accent palettes redirected to CSS variables (see index.css) so the
        // color theme switches app-wide via [data-theme] without touching components.
        pink: {
          50: 'var(--accent-50)',
          100: 'var(--accent-100)',
          300: 'var(--accent-300)',
          400: 'var(--accent-400)',
          500: 'var(--accent-500)',
          600: 'var(--accent-600)',
          700: 'var(--accent-700)',
        },
        purple: {
          100: 'var(--accent2-100)',
          300: 'var(--accent2-300)',
          400: 'var(--accent2-400)',
          500: 'var(--accent2-500)',
          600: 'var(--accent2-600)',
          700: 'var(--accent2-700)',
          800: 'var(--accent2-800)',
          900: 'var(--accent2-900)',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'gradient-x': 'gradient-x 15s ease infinite',
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': { 'background-size': '200% 200%', 'background-position': 'left center' },
          '50%': { 'background-size': '200% 200%', 'background-position': 'right center' },
        },
      },
    },
  },
  plugins: [],
};
