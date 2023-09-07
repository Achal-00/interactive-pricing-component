/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
      },
      colors: {
        "full-slider-bar": "hsl(174, 77%, 80%)",
        "slider-background": "hsl(174, 86%, 45%)",
        "discount-background": "hsl(14, 92%, 95%)",
        "discount-text": "hsl(15, 100%, 70%)",
        "cta-text": "hsl(226, 100%, 87%)",
        "white-background": "hsl (0, 0%, 100%)",
        "main-background": "hsl(230, 100%, 99%)",
        "empty-slider-bar": "hsl(224, 65%, 95%)",
        "toggle-background": "hsl(223, 50%, 87%)",
        "main-text": "hsl(225, 20%, 60%)",
        "text-cta-background": "hsl(227, 35%, 25%)",
      },
      fontSize: {
        "mobile-font": "clamp(0.8rem, min(3.5dvw, 3.5dvh), 1.2rem)",
        "desktop-font": "clamp(0.8rem, min(2dvw, 2dvh), 3rem)",
      },
      screens: {
        tablet: "1000px",
        laptop: "1025px",
      },
    },
  },
  plugins: [],
};
