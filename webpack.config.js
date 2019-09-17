const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, '_Output'),
        filename: 'bundle.js',
    },
    devServer: {
        contentBase: path.join(__dirname, 'media'),
        compress: true,
        port: 3000,
    },
    mode: 'development',
    watch: true,
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                test: /\.js(\?.*)?$/i,
            }),
        ],
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: [
                    'babel-loader',
                    'eslint-loader',
                ],
            },
            {
                test: /\.scss$/,
                exclude: /(node_modules)/,
                use: [
                        'style-loader',
                        'css-loader',
                        'sass-loader',
                    ],
            },
            {
                test: /\.(ttf|eot|svg)$/,
                loader: 'file-loader',
            },
            {
                test: /\.gif$/,
                loader: 'url-loader',
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/template.html',
            title: 'index.html',
        }),
    ],
};
