/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors.js");
module.exports = {
  content: [
    "./src/components/**/*.{js,vue,ts}",
    "./src/layouts/**/*.vue",
    "./src/pages/**/*.vue",
    "./src/plugins/**/*.{js,ts}",
    "./src/app.vue",
    "./src/error.vue",
  ],
  theme: {
    extend: {},
    colors: {
      'light-blue': '#526AFF'
    }
  },
  plugins: [],
}