/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      SpaceMono: ["Space Mono", "monospace"],
    },
    extend: {
      colors: {
        // primary
        StrongCyan: "#26C0AB",
        // Neutral
        VeryDarkCyan: "#00494D",
        DarkGrayishCyan: " #5E7A7D",
        GrayishYan: "#7F9C9F",
        LightgrayishCyan: "#C5E4E7",
        VeryLightGrayishCyan: "#F4FAFA",
        White: "#FFFFFF",
      },
    },
  },
  plugins: [],
};
