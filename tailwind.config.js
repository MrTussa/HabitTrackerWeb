/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        orange: "#F97316",
      },
      boxShadow: {
        orange: "0px 2px 10px -3px rgba(249, 115, 22, 0.2)",
        card: "0px 2px 10px 0px #f0f0f0",
      },
      borderRadius: {
        card: "8px",
        action: "30px",
      },
      backgroundColor: {
        orange: "#FFF3E9",
      },
    },
  },
  plugins: [],
};
