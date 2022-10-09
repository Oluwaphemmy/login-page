/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      backgroundImage: {
        "grad-texture": "url('/img/gradient.png')",
      },
      colors: {
        button: "#046586",
        login: "#161843",
        placeholder: "#717a90",
        sign: "#0465",
        or: "#838a9e",
        forget: "#0c6787",
        svg: "#202842",
        bg: "rgba(255, 255, 255, 0.85) ",
      },
      fontFamily: {
        mulish: ['"Mulish"', sans-serif],
        rokit: [' "Rokkitt" ', serif],
      },
    },
  },
  plugins: [],
};
