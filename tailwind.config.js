import colors from 'tailwindcss/colors';

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      animation: {
        'fade-in-from-above':
          'fade-in 0.5s forwards ease-in-out 0.5s, move-down 0.5s forwards ease-in-out 0.5s',
      },
      colors: {
        primary: colors.slate[900],
        secondary: colors.zinc[900],
        light: colors.zinc[100],
        accent: colors.emerald[400],
      },
      fontFamily: {
        poppins: ['var(--font-poppins)'],
      },
      keyframes: {
        'fade-in': {
          '0%': {
            opacity: 0,
          },
          '100%': {
            opacity: 1,
          },
        },
        'move-down': {
          '0%': {
            transform: 'translateY(-10%)',
          },
          '100%': {
            transform: 'translateY(0)',
          },
        },
      },
    },
  },
  plugin: [],
};
