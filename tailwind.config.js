/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('/src/assets/hero-section.png')",
        vectorblue: "url('/src/assets/vectorblue.png')",
        vectorred: "url('/src/assets/vectorred.png')",
      },
      colors: {
        primary: "#19355a",
        secondary: "#B04CE0",
        tertiary: "#4C57E0",
      },
    },
  },
  plugins: [],
};
