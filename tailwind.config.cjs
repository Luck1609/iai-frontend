/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "default-blue": "#1C2E5B",
        "default-red": "#C1252A",
        "red-text": "#BE2227",
        "input-border": "#1E313E",
        primary: "#0499FF",
        heading: "#1A5AA7",
        input: "#FBFBFB",
        heading2: "#57CAF1",
        "admin-text": "#838799",
      },
      backgroundImage: {
        mechanic: "url('/img/mechanic_bg.jpg')",
        about: "url('/img/about_bg.jpg')",
        contact: "url('/img/contact_bg.jpg')",
        market: "url('/img/market_short.jpg')",
        staff: "url('/img/staff.jpg')",
        lady: "url('/img/lady.png')",
        line: "url('/img/line.png')",
        tailor: "url('/img/tailor.png')",
        tailor: "url('/img/tailor.png')",
        "drawing-board": "url('/img/drawing_board.jpg')",
      },
      boxShadow: {
        "form-shadow": "0px 4px 24px 2px #0000003f",
      },
    },
  },
  plugins: [],
};
