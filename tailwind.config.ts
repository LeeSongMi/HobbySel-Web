import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1280px',
      xl: '1440px',
    },

    fontFamily: {
      bmJua: ['Jua', 'sans-serif'],
    },
    extend: {
      colors: {
        primary: 'var(--colors-main-primary)',
        secondary: 'var(--colors-main-secondary)',
        green: { 0: 'var(--colors-green-0)', 1: 'var(--colors-green-1)', 2: 'var(--colors-green-2)' },
        brown: { 0: 'var(--colors-brown-0)', 1: 'var(--colors-brown-1)', 2: 'var(--colors-brown-2)' },
      },
    },
  },
  plugins: [],
};
export default config;
