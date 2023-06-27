/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Roboto Mono", "monospace"],
    },
    extend: {
      colors: {
        custom1: "#31313A",
        custom2: "#28282F",
        custom3: "#F26B38",
      },
    },
  },
  plugins: [],
};
