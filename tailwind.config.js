/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
     fontFamily: {
        // This creates the 'font-archivo' class
        archivo: ['"Archivo Black"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}