// tailwind.config.ts
import type { Config } from "tailwindcss";
import { THEME } from "./app/constants/theme";
import forms from "@tailwindcss/forms";
import typography from "@tailwindcss/typography";
import aspectRatio from "@tailwindcss/aspect-ratio";
import scrollbar from "tailwind-scrollbar";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
      },
      future: {
        hoverOnlyWhenSupported: true,
      },
      colors: {
        primary: "rgb(var(--color-primary) / <alpha-value>)",
        "primary-dark": "rgb(var(--color-primary-dark) / <alpha-value>)",
        secondary: "rgb(var(--color-secondary) / <alpha-value>)",
        background: "rgb(var(--color-background) / <alpha-value>)",
        foreground: "rgb(var(--color-foreground) / <alpha-value>)",
        text: "rgb(var(--color-text) / <alpha-value>)",
        gray: THEME.colors.gray,
      },
      fontSize: THEME.fontSize,
      spacing: THEME.spacing,
      animation: {
        "fade-in": "fadeIn 0.3s ease-in",
        "spin-slow": "spin 1s linear infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  darkMode: "class",
  plugins: [forms, typography, aspectRatio, scrollbar],
} satisfies Config;
