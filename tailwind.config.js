module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'v-black': '#373737',
        'v-gray': '#4d4d4d',
        'v-primary': '#00ACE6',
        'v-africa': '#38C4F3'
      },
      height:{
        '98': "30rem",
        '100': "32rem"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
