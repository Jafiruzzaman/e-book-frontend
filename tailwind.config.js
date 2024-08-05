/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bluePrimary:"#4679FE",
        blueSecondary:"#4261D6",
        blackPrimary:"#0D133E",
        textPrimary:"#62676F",
        bodyPrimary:"#E5ECFB",
      },
      container:{
        center:true,
      },
      padding: {
        sm:"1rem",
        md:"2rem",
        lg:"3rem",
        xl:"4rem",
        "2xl":"5rem",
        "3xl":"6rem",
      },
      screens:{
        sm:"450px",
        md:"768px",
        lg:"960px",
        xl:"1024px",
      },
      fontFamily:{
        "montserrat": "var(--font-montserrat)",
        "montagu-slab": "var(--font-montagu-slab)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
