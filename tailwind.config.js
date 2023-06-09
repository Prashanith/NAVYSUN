/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0A2647",
        secondary: "#EF7F1D",
        tertairy: "#FEFDF9",
      },
    },
  },
  plugins: [],
};
