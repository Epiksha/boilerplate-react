const ESLintWebpackPlugin = require("eslint-webpack-plugin");
const { resolve } = require("path");
const SpriteLoaderPlugin = require("svg-sprite-loader/plugin");

module.exports = {
    entry: ["./src/index.tsx"],

    output: {
        clean: true,
        filename: "bundle.js",
        path: resolve(__dirname, "dist"),
        publicPath: "/"
    },

    plugins: [
        new SpriteLoaderPlugin(),
        new ESLintWebpackPlugin,
    ],

    resolve: {
        extensions: [".tsx", ".ts", ".js"],
    },

    module: {
        rules: [
            {
                test: /\.[jt]sx?$/,
                loader: "babel-loader",
                exclude: /node_modules/, 
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                type: "asset/resource",
                include: [resolve(__dirname, "src/assets/images")],
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: "asset/resource",
                include: [resolve(__dirname, "src/assets/fonts")],
            },
            {
                test: /\.svg$/,
                include: [resolve(__dirname, "src/assets/icons")],
                use: ["svg-sprite-loader", "svgo-loader"],
            }
        ],
    },
};