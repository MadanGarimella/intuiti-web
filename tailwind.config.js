/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#09090b',
        surface: '#121214',
        border: '#27272a',
        primary: '#2563eb',
        muted: '#a1a1aa',
        text: '#fafafa',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}