/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#4CAF50',
          light: '#81C784',
          dark: '#2E7D32'
        },
        surface: {
          light: '#F8F9FA',
          dark: '#121212'
        },
        ink: {
          DEFAULT: '#1A1A1A',
          secondary: '#666666',
          inverse: '#FFFFFF'
        },
        line: {
          light: '#E0E0E0',
          dark: '#3A3A3A'
        }
      },
      boxShadow: {
        soft: '0 10px 30px rgba(0,0,0,0.08)'
      }
    },
  },
  plugins: [],
}