/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        orange: "#F97316",
      },
      boxShadow: {
        card: "0px 2px 10px 0px #9F9F9F",
      },
    },
  },
  plugins: [],
};
