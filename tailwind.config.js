/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
   ],
  theme: {
    extend: {
      colors: {
        primary: "#002B5B",
        secondary: "#EA5455",
        tertiary: "#E4DCCF",
        quaternary: "#F9F5EB"
      }
    },
  },
  plugins: [],
}
