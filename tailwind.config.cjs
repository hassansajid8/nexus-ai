/** @type {import('tailwindcss').Config} */
export default {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {},
    colors: {
      'black': {
        0: '#000000',
        50: '#2F2F2F'
    },
    'white': {
      0: '#FFFFFF',
      50: '#F5F5F5',
      100: '#EEEEEE',
      150: '#E9E9E9',
      200: '#DFDFDF'
    },
    'purple': {
      50: '#F167DB',
      100: '#A341E6',
    }
    },
    fontFamily: {
      sans: ['Comfortaa', 'sans-serif']
    }
  },
  plugins: [],
}

