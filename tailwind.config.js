/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: '#059669',
        secondary: '#64748b',
        dark: '#030712',
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

