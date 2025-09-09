/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./*.html"],
  theme: {
    extend: {
      colors: {
        primary: {
          dark: "#202020",
          light: "#7E7E7E",
          accent: "#DBB977",
          blue: "#C5E1E5",
          green: "#DCE6E0",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Space Grotesk", "Inter", "sans-serif"],
        body: ["Manrope", "Inter", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.6s ease-out",
        parallax: "parallax 20s linear infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(30px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        parallax: {
          "0%": { transform: "translateY(0px)" },
          "100%": { transform: "translateY(-100px)" },
        },
      },
    },
  },
  plugins: [],
};
