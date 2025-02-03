/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      clipPath: {
        hexagon: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
      },
      brightness: {
        40: "0.4", // Custom brightness at 40%
      },
      fontFamily: {
        jost: ["Jost", "sans-serif"], // Custom Jost font
      },
      colors: {
        primary: "#b89272", // Primary color definition
      },
      animation: {
        scroll: "scroll 20s linear infinite",
        "custom-bounce": "customBounce 1s ease-in-out infinite", 
        "custom-bounce2": "customBounce 1s ease-in infinite",
      },
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
        customBounce: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
