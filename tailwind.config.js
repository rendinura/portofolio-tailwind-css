/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: '#34d399',
        secondary: '#64748b',
        dark: '#0f172a',
        about: '#3b82f6',
        blue: '#67e8f9'
      },
      screens: {
        '2xl': '1320px'
      }
    },
  },
  plugins: [],
}

