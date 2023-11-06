/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        '16/17': '94.118%'
      },
      fontSize: {
        'xxs': '0.6rem'
      }
    },
  },
  plugins: [],
}

