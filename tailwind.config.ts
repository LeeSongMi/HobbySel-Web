import type { Config } from 'tailwindcss';
/** px 세부 단위 설정을 위한 프리셋 */
const px_500_50 = {
  50: '50px',
  100: '100px',
  150: '150px',
  200: '200px',
  250: '250px',
  300: '300px',
  350: '350px',
  400: '400px',
  450: '450px',
  500: '500px',
};

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
      width: px_500_50,
      height: px_500_50,
      maxWidth: px_500_50,
      maxHeight: px_500_50,
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
