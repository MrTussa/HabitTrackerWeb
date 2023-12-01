/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        orange: "#F97316",
      },
      boxShadow: {
        card: "0px 2px 10px 0px rgba(249, 115, 22, 0.2)",
      },
      borderRadius: {
        card: "8px",
        action: "30px",
      },
    },
  },
  plugins: [],
};
