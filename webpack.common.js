const { resolve } = require('path');
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');

module.exports = {
    entry: ['./src/index.tsx'],

    output: {
        clean: true,
        filename: 'bundle.js',
        path: resolve(__dirname, 'dist'),
    },

    plugins: [
        new SpriteLoaderPlugin(),
    ],

    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },

    module: {
        rules: [
            {
                test: /\.[jt]sx?$/,
                enforce: 'pre',
                use: [
                  {
                    options: {
                      eslintPath: require.resolve('eslint'),
            
                    },
                    loader: require.resolve('eslint-loader'),
                  },
                ],
                exclude: /node_modules/,
            },
            {
                test: /\.[jt]sx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/, 
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                type: 'asset/resource',
                include: [
                    resolve(__dirname, 'src/assets/images'),
                ],
            },
            {
                test: /\.svg$/,
                include: [
                    resolve(__dirname, 'src/assets/icons'),
                ],
                use: [
                    'svg-sprite-loader',
                    'svgo-loader'
                ]
            },
        ],
    },
};