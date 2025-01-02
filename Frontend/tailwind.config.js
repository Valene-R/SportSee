/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        lg: "1240px", // min width
        xl: "1440px", // max width
      },
      verticalAlign: {
        block: "unset", // Remove vertical-align for blocks
      },
    },
  },
  plugins: [],
};
