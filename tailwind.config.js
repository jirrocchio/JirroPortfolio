/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        sans: ['"DM Sans"', 'sans-serif'],
        mono: ['"DM Mono"', 'monospace'],
      },
      colors: {
        gold: {
          DEFAULT: '#c8a96e',
          light: '#e8c98e',
          lighter: '#f5e2b8',
        },
        dark: {
          DEFAULT: '#080c10',
          2: '#0d1117',
          3: '#111820',
          4: '#151d26',
        },
      },
    },
  },
  plugins: [],
}
