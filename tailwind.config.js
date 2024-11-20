/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontSize: {
      // 10px
      xxs: '0.625rem',
      // 12px
      xs: '0.75rem',
      // 14px
      sm: '0.875rem',
      // 16px
      base: '1rem',
      // 18px
      lg: '1.125rem',
      // 20px
      xl: '1.25rem',
      // 27px
      '2xl': '1.688rem',

      //49px
      '5xl': '3.063rem',

      // 60px
      '7xl': '3.75rem',

      // 92px
      '10xl': '5.75rem',
    },
    extend: {
      colors: {
        primary: 'var(--color-primary)',
      },
      fontFamily: {
        primary: ['Circular Std', 'sans-serif'],
        secondary: ['Circular Std Book', 'sans-serif'],
      },
      screens: {
        xsm: '375px',
        sm: '480px',
        md: '768px',
        lg: '1092px',
        xl: '1280px',
        '2xl': '1440px',
        '3xl': '1600px',
        '4xl': '1920px',
      },
      boxShadow: {
        primary: '0px 0px 15px var(--color-primary)',
      },
      spacing: {
        15: '3.75rem',
        18: '4.5rem',
        30: '7.5rem',
        50: '12.5rem',
      },
    },
  },
  plugins: [
    plugin(({ addVariant, addUtilities }) => {
      addVariant('path-stroke', ['&>g>g>line', '&>g>g>path', '&>g>g>rect', '&>g>path', '&>g>line']),
        addVariant('path-fill', ['&>g>g>line', '&>g>g>path', '&>g>g>rect', '&>g>path', '&>g>line']),
        addUtilities({
          '.flex-centered': {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          },
          '.centered-xy': {
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          },
        });
    }),
  ],
};
