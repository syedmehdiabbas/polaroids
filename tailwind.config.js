/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "theme-gray": "#efefef",
        "lime-desaturated": "#B6D28E",
      },
    },
  },
  plugins: [],
};
