/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Enable dark mode using class
  theme: {
    extend: {
      fontFamily: {
        sans: ['Raleway', 'sans-serif'],
      },
      colors: {
        'dark-background': '#2D2D2D',
        'light-background': '#FFFFFF',
      },
      animation: {
        'bounce-slow': 'bounce 2s infinite',
      },
    },
  },
  plugins: [],
}