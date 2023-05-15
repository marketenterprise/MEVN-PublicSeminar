/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      xs: { min: '320px' },
      // => @media screen and ( min-width: 320px) { ... }

      sm: { min: '640px' },
      // => @media screen and ( min-width: 640px) { ... }

      md: { min: '768px' },
      // => @media screen and (min-width: 768px) { ... }

      lg: { min: '1024px' },
      // => @media screen and (min-width: 1024px) { ... }

      xl: { min: '1280px' },
      // => @media screen and (min-width: 1280px) { ... }

      '2xl': { min: '1536px' },
      // => @media screen and (min-width: 1536px) { ... }

      mdh: { raw: 'screen and (max-height: 800px)' },
      // => @media (max-height: 800px) { ... }
    },
    container: {
      center: true,
      // default breakpoints but with 40px removed
      screens: {
        sm: '600px',
        md: '728px',
        lg: '984px',
        xl: '1240px',
        '2xl': '1240px',
      },
    },
    fontWeight: {
      thin: 100,
      light: 300,
      normal: 400,
      medium: 500,
      bold: 700,
    },
    colors: {
      primary: {
        100: '#CBEFFE',
        200: '#CBEFFF',
        300: '#44BBFF',
        350: '#44BBFC',
        400: '#00A7FF',
        500: '#0190D3',
        600: '#3366CC',
        700: '#0000FF',
        750: '#0413A3',
        800: '#0000A3',
        900: '#000962',
      },
      secondary: '#ecc94b',
      black: {
        DEFAULT: '#444444',
        dark: '#222222',
      },
      brown: {
        DEFAULT: '#AA9977',
        dark: '#968574',
      },
      gray: {
        200: '#EFEFEF',
        500: '#E0E0E0',
        600: '#CCCCCC',
        650: '#C9CACA',
        700: '#666666',
        750: '#707070',
        780: '#AAAAAA',
        800: '#888888',
        'transparent-dark': '#00000033',
      },
      pink: {
        light: '#FFCCDD',
        DEFAULT: '#EE99CC',
        dark: '#FF66AA',
      },
      violet: {
        transparent: '#AA669980',
        DEFAULT: '#AA6699',
      },
      yellow: {
        300: '#FCEE21',
        500: '#FFFF00',
      },
      cream: {
        500: '#FFEEAA',
        600: '#FFEE66',
      },
      blue: {
        light: '#C8E5F0',
        DEFAULT: '#44BBFF',
        500: '#1CA7FC',
        dark: '#3366CC',
      },
      green: {
        light: '#88DD77',
        DEFAULT: '#22AC38',
      },
      orange: '#FFAA66',
      white: {
        DEFAULT: '#FFFFFF',
        'transparent-light': '#FFFFFF99',
      },
      transparent: 'transparent',
    },
    fontSize: {
      xs: '12px',
      xss: '13px',
      sm: '14px',
      smm: '15px',
      base: '16px',
      lg: '18px',
      xl: '20px',
      '2xl': '24px',
      '3xl': '26px',
      '4xl': '28px',
      '5xl': '30px',
      '6xl': '32px',
      '7xl': '34px',
      '8xl': '36px',
      '9xl': '40px',
      '10xl': '48px',
      '11xl': '50px',
    },
    boxShadow: {
      sm: '0px 2px 5px #00000033',
      DEFAULT: '0px 3px 6px #00000066',
      md: '0px 2px 5px #0000004D',
    },
    extend: {
      gridTemplateColumns: {
        40: 'repeat(40, minmax(0, 1fr))',
        38: 'repeat(38, minmax(0, 1fr))',
      },
      gridColumn: {
        'span-38': 'span 38 / span 38',
        'span-31': 'span 31 / span 31',
        'span-22': 'span 22 / span 22',
        'span-24': 'span 24 / span 24',
        'span-14': 'span 14 / span 14',
      },
    },
  },
  plugins: [],
};
