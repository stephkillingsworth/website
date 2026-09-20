/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        porsche: {
          default: "#dea96f",
          50: "#fcf8f0",
          100: "#f8eedc",
          200: "#efdab9",
          300: "#e5bf8c",
          400: "#dea96f",
          500: "#d2853d",
          600: "#c46f32",
          700: "#a2572c",
          800: "#82462a",
          900: "#6a3b24",
          950: "#391d11",
        },
        chetwode: {
          default: "#6f84de",
          50: "#f0f5fd",
          100: "#e4edfb",
          200: "#ceddf7",
          300: "#b0c6f1",
          400: "#90a7e9",
          500: "#6f84de",
          600: "#5a67d1",
          700: "#4a54b8",
          800: "#3e4795",
          900: "#384077",
          950: "#212545",
        },
      },
      keyframes: {
        "slide-in-bottom": {
          "0%": { transform: "translateY(100%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
      animation: {
        "slide-in-bottom": "slide-in-bottom 1s ease-out forwards",
      },
    },
  },
  plugins: [require("daisyui")],
};
