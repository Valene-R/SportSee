/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        lg: "1024px", // min-width
        xl: "1300px", // min-width
        "md-narrow": { raw: "(min-width: 1024px) and (max-width: 1072px)" },
        "lg-narrow": { raw: "(min-width: 1300px) and (max-width: 1340px)" },
      },
      verticalAlign: {
        block: "unset", // Remove vertical-align for blocks
      },
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
      },
      dropShadow: {
        custom: "0px 4px 4px rgba(0, 0, 0, 0.25)",
      },
      colors: {
        customLightGray: "#FBFBFB",
      },
    },
  },
  plugins: [],
};
