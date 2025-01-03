import colors from './src/assets/tailwind/colors.js'
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: colors,
    },
  },
  plugins: [],
}
