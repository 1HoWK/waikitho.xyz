/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html", // This includes the HTML file
    "./src/a**/*.{js,jsx,ts,tsx}", // This ensures Tailwind scans your React components
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

