/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        atx: {
          navy: {
            DEFAULT: '#0A192F',
            dark: '#050C1A',
            deep: '#0F172A',
            card: '#112240',
            light: '#1E293B',
            border: '#233554',
          },
          gold: {
            DEFAULT: '#D4AF37',
            light: '#F59E0B',
            hover: '#E5A93C',
            subtle: 'rgba(212, 175, 55, 0.12)',
            glow: 'rgba(212, 175, 55, 0.25)',
          }
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
