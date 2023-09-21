import type {Config} from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    colors: {
      white: {
        DEFAULT: '#FFF',
      },
      black: {
        DEFAULT: '#000',
      },
      grey: {
        DEFAULT: '#101010',
        800: '#848484',
        700: '#7A7A7A',
        500: '#BBBBBB',
      },
      transparent: 'transparent',
    },
  },
  plugins: [],
};
export default config;
