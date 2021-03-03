module.exports = {
  purge: ["./dist/**/*.html", "./dist/**/*.js"],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#12E6EE',
        secondary: '#F4EC1A'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
