import { heroui } from "@heroui/theme";

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
      },
      colors: {
        gray: {
          50: "#F9F9F9",
          300: "#D4D4D4",
        },
      },
    },
  },
  darkMode: "class",
  plugins: [
    heroui({
      layout: {
        radius: {
          medium: "8px",
        },
        boxShadow: {
          small: "0 2px 10px rgba(0, 0, 0, 0.04)",
          medium: "0 3px 26px rgba(0, 0, 0, 0.04)",
        },
      },
      themes: {
        light: {
          colors: {
            foreground: {
              DEFAULT: "#2F3742",
            },
            primary: {
              DEFAULT: "#1E3A8A",
            },
            default: {
              DEFAULT: "#fff",
            },
          },
        },
      },
    }),
  ],
};

module.exports = config;
