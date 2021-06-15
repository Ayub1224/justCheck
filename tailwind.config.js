module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      Niagara:'#08B48b'
    },
    extend: {},
  },
  variants: {
    extend: {
      backgroundColor:['active'] // now when ever the nesting happens we can change the background
    }, // yaha jo bhi extend krna rahega kr sakte
  },
  plugins: [],
}
