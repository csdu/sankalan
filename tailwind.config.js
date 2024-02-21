/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
 
/*
  Color Codes:
  Yellow: #ffe21e
  Red: #f30f49
  Green: #00bc81
  Blue: 007fc1
*/

module.exports = withMT({ 
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./includes/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      'animation': {
            'text':'text 5s ease infinite',
      },
      'keyframes': {
          'text': {
              '0%, 100%': {
                  'background-size':'200% 200%',
                  'background-position': 'left center'
              },
              '50%': {
                  'background-size':'200% 200%',
                  'background-position': 'right center'
              }
          },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        sankalan: {
          yellow: "#ffe21e",
          red: "#f30f49",
          green: "#00bc81",
          blue: "#007fc1",
        },
        'sankalan-accent': {
          yellow: "#ff7f00",
          red: "#a31313",
          green: "#187734",
          blue: "#0948a9",
        },
        'sankalan-dark': {
          yellow: "#ff3f00",
          red: "#7a0b0b",
          green: "#0f3e0d",
          blue: "#011c79",
        }
      }
    },
  },
  variants: {
        extend: {},
    },
  plugins: [],
});
