// providers/ThemeProvider.tsx
"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { Theme, lightTheme, darkTheme } from "@/types/theme";
type ThemeContextType = {
  theme: "light" | "dark";
  toggleTheme: () => void;
  currentTheme: Theme;
};
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const currentTheme = theme === "light" ? lightTheme : darkTheme;
  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === "light" ? "dark" : "light";
      localStorage.setItem("theme", newTheme);
      return newTheme;
    });
  };
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark";
    if (savedTheme) {
      setTheme(savedTheme);
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    }
  }, []);
  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    Object.entries(currentTheme).forEach(([key, value]) => {
      document.documentElement.style.setProperty(`--${key}`, value);
    });
  }, [theme, currentTheme]);
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, currentTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
