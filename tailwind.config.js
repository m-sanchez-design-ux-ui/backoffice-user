/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}", "./node_modules/flowbite/**/*.js"],
  theme: {
    fontSize: {
      xs: "0.8rem",
      sm: "0.875rem",
      base: "1rem",
      xl: "1.25rem",
      lg: "1.125rem",
      "2xl": "1.5rem",
      "3xl": "1.953rem",
      "4xl": "2.441rem",
      "5xl": "3.052rem",
    },
    screens: {
      //Responsive breakpoints default can be change
      sm: "640px",
      // => @media (min-width: 640px) { ... }
      md: "768px",
      // => @media (min-width: 768px) { ... }
      lg: "1024px",
      // => @media (min-width: 1024px) { ... }
      xl: "1280px",
      // => @media (min-width: 1280px) { ... }
      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      keyframes: {
        "slide-in-right-fade": {
          "0%": { transform: "translateX(150%)", opacity: "0" }, // Empieza fuera de la pantalla con opacidad 0
          "100%": { transform: "translateX(0%)", opacity: "1" }, // Llega a la posición final con opacidad 100%
        },
      },
      animation: {
        "slide-in-right-fade": "slide-in-right-fade 0.75s ease-out forwards", // Nombre de la animación
      },
      colors: {
        primary: "#046C4E",
      },
      fontFamily: {
        //Custom font can be change
        Montserrat: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    require('flowbite/plugin')({
        charts: true,
    }),
  ]
};
