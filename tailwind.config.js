/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "how-pattern": "url('/asset/images/back-drop.svg')",
      },
    },
    colors: {
      primary: "#172671",
      secondary: "#FA5E1E",
      secondaryLightBackground: "#FFFAF9",
      primaryLightBackground: "#EEF1FF",
      secondaryBackground: "#FED8B1",
      borderbg: "#565353",
      white: "#FFFFFF",
    },
  },
  plugins: [],
};
