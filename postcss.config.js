const tailwindcss = require('tailwindcss')
const autoprefixer = require('autoprefixer')

module.exports = {
    presets:["postcss-preset-env"],
    // plugins:[tailwindcss],
    plugins:[tailwindcss('./tailwind.config.js', autoprefixer)]
}
