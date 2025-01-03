// constants/theme.ts
export const THEME = {
    colors: {
      primary: {
        50: '#e6f1fe',
        100: '#cce3fd',
        200: '#99c7fb',
        300: '#66aaf9',
        400: '#338ef7',
        500: '#0072f5',
        600: '#005bc4',
        700: '#004493',
        800: '#002e62',
        900: '#001731',
      },
      gray: {
        50: '#f9fafb',
        100: '#f3f4f6',
        200: '#e5e7eb',
        300: '#d1d5db',
        400: '#9ca3af',
        500: '#6b7280',
        600: '#4b5563',
        700: '#374151',
        800: '#1f2937',
        900: '#111827',
      },
    },
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
    },
    spacing: {
      px: '1px',
      0: '0',
      1: '0.25rem',
      2: '0.5rem',
      3: '0.75rem',
      4: '1rem',
      5: '1.25rem',
      6: '1.5rem',
      8: '2rem',
      10: '2.5rem',
      12: '3rem',
      16: '4rem',
      20: '5rem',
      24: '6rem',
      32: '8rem',
      40: '10rem',
      48: '12rem',
      56: '14rem',
      64: '16rem',
    },
  }



  import { Theme } from '../types/theme';

  export const lightTheme: Theme = {
    primary: '#0f172a',
    secondary: '#334155',
    background: '#ffffff',
    text: '#0f172a',
  };
  
  export const darkTheme: Theme = {
    primary: '#e2e8f0',
    secondary: '#94a3b8',
    background: '#0f172a',
    text: '#ffffff',
  };