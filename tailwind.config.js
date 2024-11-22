const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html", // This includes the HTML file
    "./src/**/*.{html,js,jsx,ts,tsx}", // Adjust this path based on your file structure
    flowbite.content(),
  ],
  theme: {
    extend: {},
  },
  plugins: [
    flowbite.plugin(),
  ],
};
