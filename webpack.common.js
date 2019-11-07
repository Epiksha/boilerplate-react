module.exports = {
    entry: './src/index.js',

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
                test: /\.html$/,
                loader: 'html-loader'
            },
            {
                test: /\.(woff|ttf|eot|svg|jpe?g|png)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: "[name].[hash].[ext]",
                        outputPath: 'assets/'
                    }
                }
            }
        ]
    }
};