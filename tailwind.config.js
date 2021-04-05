module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'v-black': '#373737',
        'v-gray': '#4d4d4d',
        'v-primary': '#00ACE6'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
