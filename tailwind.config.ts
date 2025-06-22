// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}", // ajuste conforme seu projeto
  ],
  theme: {
    extend: {
      colors: {
        eventosnap: {
          dark: "#2E2F32", // Carvão elegante
          gold: "#C19B5C", // Dourado suave
          beige: "#E9D7C3", // Bege claro
          cream: "#F9F5EF", // Creme suave
          "off-white": "#FBF9F4", // Fundo principal
        },
      },
      fontFamily: {
        serif: ["Playfair Display", "serif"],
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
