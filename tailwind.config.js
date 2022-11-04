/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'sm': '320px',
      // => @media (min-width: 320px) { ... }
      'xs': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        "blue-750": "#1570EF",
      },

      spacing: {
        90: "21.44rem", // 343px
        100: "37.5rem", //600px
      },
      maxWidth: {
        "2xxl": "720px",
      },
    },
  },
  plugins: [],
}