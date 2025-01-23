// types/theme.ts
export type Theme = {
  primary: string;
  secondary: string;
  background: string;
  text: string;
};

export const lightTheme: Theme = {
  primary: "#0f172a",
  secondary: "#334155",
  background: "#ffffff",
  text: "#0f172a",
};
export const darkTheme: Theme = {
  primary: "#e2e8f0",
  secondary: "#94a3b8",
  background: "#0f172a",
  text: "#ffffff",
};
