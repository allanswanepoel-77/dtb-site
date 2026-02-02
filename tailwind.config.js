/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        dtb: {
          DEFAULT: "#F03F01",
          hover: "#d93801",
        },
      },
    },
  },
  plugins: [],
};
