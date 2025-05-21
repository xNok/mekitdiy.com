/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./layouts/**/*.html",
    "../../layouts/**/*.html", // Project-level layouts
    "../../content/**/*.md",   // Project-level content files
  ],
  theme: {
    extend: {
      colors: {
        'neo-yellow': '#FFFF00',
        'neo-black': '#000000',
        'neo-white': '#FFFFFF',
      },
      boxShadow: {
        'neo': '4px 4px 0px #000000',
        'neo-lg': '8px 8px 0px #000000',
      }
    },
  },
  plugins: [],
}