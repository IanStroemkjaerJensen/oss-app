/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        nav: "#0a192f",
        page: "#112240;",
        card: "#233554",
        "card-hover": "#4f5e74",
        "default-textcolor": "#f1f3f5",
        btn: "#57cbff",
        "btn-hover": "",
        "label-auburn": "#65244a",
      },
    },
  },
  plugins: [],
};
