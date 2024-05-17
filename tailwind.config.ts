import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      iAWriter: ['iAWriter', 'sans-serif'],
    },
    extend: {
      colors: {
        gray: {
          100: "#fcfcfa", // bg light
          200: "#eeeeec", // sidebar bg light
          300: "#e0e0df", // sidebar btn bg light
          400: "#b7b6b6",
          500: "#8d8b8c",
          600: "#636163",
          700: "#393639", // sidebar btn bg dark
          800: "#2d2b2d", // sidebar bg dark
          900: "#221f22", // bg dark
        },
        primary: {
          100: "#cfe5e6",
          200: "#a4dadf",
          300: "#79cfd8",
          400: "#21b1c1",
          500: "#1e9eac",
          600: "#1a8a97",
          700: "#1d5f68",
          800: "#204e55",
          900: "#223c42",
        },
        secondary: {
          light: "#e14e05",
          dark: "#fc9867"
        },
        green: {
          50: "#f7fee7",
          100: "#ecfccb",
          200: "#d9f99d",
          300: "#bef264",
          400: "#a3e635",
          500: "#84cc16", // Default green
          600: "#65a30d",
          700: "#3f6c05",
          800: "#365314",
          900: "#203a27"
        }
      },
    },
  },
  plugins: [],
};

export default config;