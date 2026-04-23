/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'baby-blue': '#E0F2FE',
        'ocean-blue': '#7DD3FC',
        'deep-navy': '#1E3A8A',
      },
    },
  },
  plugins: [],
}