/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // ...
        customColor: '#040404',
        card: '#0B0B0B',
        innerCard : '#24252C',
        borderColor : '#2E2E2E',
        bluecard : '#0048FF'
      },
    },
  },
  plugins: [],
}

