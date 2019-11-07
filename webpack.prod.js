const common = require('./webpack.common');
const { join } = require('path');
const merge = require('webpack-merge');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = merge(common, {
    mode: 'production',

    output: {
        filename: 'main.[contentHash].js',
        path: join(__dirname, 'dist')
    },

    plugins: [new CleanWebpackPlugin()],

    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                test: /\.js(\?.*)?$/i
            })
        ]
    }
});