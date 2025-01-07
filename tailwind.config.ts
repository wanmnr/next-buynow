// tailwind.config.ts
import type { Config } from "tailwindcss";
import { THEME } from "./app/constants/theme";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: THEME.colors.primary,
        gray: THEME.colors.gray,
        // CSS variables for theme switching
        "theme-primary": "var(--primary)",
        "theme-secondary": "var(--secondary)",
        "theme-background": "var(--background)",
        "theme-foreground": "var(--foreground)",
        "theme-text": "var(--text)",
      },
      fontSize: THEME.fontSize,
      spacing: THEME.spacing,
    },
  },
  darkMode: "class",
  plugins: [],
} satisfies Config;
