const common = require('./webpack.common');
const merge = require('webpack-merge');
const { join } = require('path');

module.exports = merge(common, {
    mode: 'development',

    output: {
        filename: 'main.js',
        path: join(__dirname, 'dist')
    },

    devServer: {
        port: 3000
    }
});