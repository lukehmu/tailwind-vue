const tailwindcss = require('tailwindcss');

module.exports = {
    //parser: 'sugarss',
    plugins: [
        // ...
        tailwindcss('./tailwind.js'),
        require('autoprefixer'),
        // ...
    ]
}