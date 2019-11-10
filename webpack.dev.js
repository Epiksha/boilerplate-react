const common = require('./webpack.common');
const merge = require('webpack-merge');
const { join } = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
    mode: 'development',

    output: {
        filename: '[name].bundle.js',
        path: join(__dirname, 'dist')
    },

    devServer: {
        port: 3000,
        historyApiFallback: true,
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/template.html'
        })
    ],

    module: {
        rules: [
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    }
});