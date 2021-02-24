const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    screens: {
      xs: '375px',
      ...defaultTheme.screens,
    },
    fontFamily: {
      sans: ['Nunito Sans'],
      serif: ['sans-serif']
    },
    fontSize: {
      sm: ['14px', '20px'],
      base: ['16px', '24px'],
      lg: ['20px', '28px'],
      xl: ['24px', '32px'],
    },
    extend: {
      colors: {
        'light': 'hsl(0, 0%, 98%)',
        'dark': 'hsl(207, 26%, 17%)',
        'item': 'hsl(200, 15%, 8%)',
        'item-dark': 'hsl(0, 0%, 100%)',
        'elem': 'hsl(0, 0%, 100%)',
        'elem-dark': 'hsl(209, 23%, 22%)',
        'input': 'hsl(0, 0%, 52%)',
        'input-dark': 'hsl(0, 0%, 52%)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
