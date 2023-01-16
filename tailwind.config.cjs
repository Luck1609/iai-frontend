/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "default-blue": "#1C2E5B",
        "default-red": "#C1252A",
        "primary": "#0499FF",
        "heading": "#1A5AA7",
        "heading2": "#57CAF1"
      },
      backgroundImage: {
        "mechanic": "url('/img/mechanic_bg.jpg')",
        "about": "url('/img/about_bg.jpg')",
        "contact": "url('/img/contact_bg.jpg')",
        "market": "url('/img/market_short.jpg')",
        "staff": "url('/img/staff.jpg')",
        "lady": "url('/img/lady.png')",
        "tailor": "url('/img/tailor.png')",
      }
    },
  },
  plugins: [],
}
