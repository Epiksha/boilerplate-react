const common = require('./webpack.common');
const merge = require('webpack-merge');
const { join } = require('path');

const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = merge(common, {
    mode: 'production',

    output: {
        filename: 'main.[contentHash]js',
        path: join(__dirname, 'dist')
    },

    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                test: /\.js(\?.*)?$/i
            })
        ]
    }
});