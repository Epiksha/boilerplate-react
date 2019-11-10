const common = require('./webpack.common');
const { join } = require('path');
const merge = require('webpack-merge');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
    mode: 'production',

    output: {
        filename: '[name].[contentHash].bundle.js',
        path: join(__dirname, 'dist')
    },

    optimization: {
        minimizer: [
            new HtmlWebpackPlugin({
                template: 'src/template.html',
                minify: {
                    removeAttrbuteQuotes: true,
                    collapseWhitespace: true,
                    removeComments: true
                }
            }),
            new OptimizeCSSAssetsPlugin(),
            new UglifyJsPlugin({
                test: /\.js(\?.*)?$/i
            })
        ]
    },

    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name].[contentHash].css"
        }),
        new CleanWebpackPlugin()
    ],
    
    module: {
        rules: [
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    }
});