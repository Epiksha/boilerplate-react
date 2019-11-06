const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',

    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/template.html'
        })
    ],

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: [
                    'babel-loader',
                    'eslint-loader'
                ]
            },
            {
                test: /\.scss$/,
                exclude: /(node_modules)/,
                use: [
                    'style-loader',
                    'css-loader',
                    'postcss-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(woff|ttf|eot|svg|jpe?g|png)$/i,
                loader: 'file-loader'
            },
            {
                test: /\.gif$/,
                loader: 'url-loader'
            }
        ]
    }
};