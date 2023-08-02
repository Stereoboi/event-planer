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
        action: "#7B61FF",
      },
      boxShadow: {
        custom: "5px 5px 10px 0px rgba(219,210,219,1);",
      },
      backgroundImage: {
        hero: "url('/bg.jpg')",
      },
      fontFamily: {
        poppins: ["var(--font-poppins)"],
        alata: ["var(--font-alata)"],
      },
    },
  },
  plugins: [],
};
