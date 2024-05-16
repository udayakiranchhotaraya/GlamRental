/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        'glam-bg-primary' : '#f7f4e9',
        'glam-accent-text' : '#eba63f',
        'glam-bg-footer' : '#3d3b3b'
      },
      fontFamily: {
        seasons : "the-seasons, sans-serif"
      }
    },
  },
  plugins: [],
}

