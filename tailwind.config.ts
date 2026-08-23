import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Luxury Architectural Light Palette (Alabaster, Limestone, Travertine)
        surface: "#faf9f6",
        "surface-container": "#ffffff",
        "surface-container-low": "#f5f4f0",
        "surface-container-high": "#ebe9e4",
        "surface-container-highest": "#e2dfd9",
        
        // Deep Obsidian Text
        "on-surface": "#141416",
        "on-surface-variant": "#57534e",
        
        // Refined Champagne & Bronze Accents
        bronze: {
          50: "#fdfbf7",
          100: "#f7f3eb",
          200: "#ece2d0",
          300: "#decbb0",
          400: "#c5a880",
          500: "#8c6e45",
          600: "#705432",
          700: "#543e22",
          800: "#382914",
          900: "#1f160a",
        },
      },
      fontFamily: {
        sans: ["Helvetica Neue", "Helvetica", "Arial", "sans-serif"],
        serif: ["Helvetica Neue", "Helvetica", "Arial", "sans-serif"],
        helvetica: ["Helvetica Neue", "Helvetica", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;

