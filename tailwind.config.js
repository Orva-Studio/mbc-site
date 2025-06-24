/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Montserrat', 'var(--font-sans)', 'system-ui', 'sans-serif'],
        'serif': ['Montserrat', 'var(--font-sans)', 'system-ui', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
        accent: {
          50: '#fef7ff',
          100: '#fdeeff',
          200: '#fad5ff',
          300: '#f5b3ff',
          400: '#ed82ff',
          500: '#e052ff',
          600: '#c730e8',
          700: '#a521c4',
          800: '#881ba0',
          900: '#6f1a82',
        },
        orange: '#dd9255',
        'dark-blue': '#2d3844',
      }
    },
  },
  plugins: [],
}