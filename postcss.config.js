const postcssPresetEnv = require('postcss-preset-env');
const purgecss = require('@fullhuman/postcss-purgecss');

module.exports = {
    plugins: [
        purgecss({
            content: ['./src/**/*.html', './src/**/*.tsx', './src/**/*.js'],
        }),
        postcssPresetEnv({
            browsers: 'last 2 versions',
        }),
    ],
};