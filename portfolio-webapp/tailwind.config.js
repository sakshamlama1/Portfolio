/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      animation: {
      'fade-in': 'fadeIn 0.25s ease-out',
      },
    },
  },
  keyframes: {
    fadeIn: {
        '0%': { opacity: 0, transform: 'scale(0.97)' },
        '100%': { opacity: 1, transform: 'scale(1)' },
      },
  },
  plugins: [],
  variants: {
    extend: {
      ringWidth: ['focus-visible'],
      ringColor: ['focus-visible'],
      outline: ['focus-visible'],
    },
  }
}

