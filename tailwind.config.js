import colors from 'tailwindcss/colors';
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      red: '#b91c1c',
      emerald: colors.emerald,
      white: colors.white,
      sky: colors.sky,
      gray: colors.gray,
      black: colors.black,
    },
    extend: {
      inset: {
        '-30px': '-30px',
      },
    },
  },
  plugins: [],
};
