/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    fontFamily: {
      body: 'Poppins, sans-serif',
    },
    keyframes: {
      'slide-right': {
        '100%': {
          transform: 'rotate(30deg) scale(0.8) translateX(100%)',
          opacity: 0,
        },
      },
      'slide-left': {
        '100%': {
          transform: 'rotate(-30deg) scale(0.8) translateX(-100%)',
          opacity: 0,
        },
      },
      'slide-up': {
        '100%': {
          transform: 'scale(0.8) translateY(-100%)',
          opacity: 0,
        },
      },
    },
    animation: {
      'slide-right': 'slide-right 2s 1 forwards',
      'slide-left': 'slide-left 2s 1 forwards',
      'slide-up': 'slide-up 2s 1 forwards',
    },
  },
};
