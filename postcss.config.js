export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    require('postcss-import'),
    require('tailwindcss/nesting')(require('postcss-nesting')),
    require('tailwindcss'),
    require('autoprefixer'),
  },
}
