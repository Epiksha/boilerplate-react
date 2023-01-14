const common = require("./webpack.common");
const { merge } = require("webpack-merge");

const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(common, {
    mode: "production",

    optimization: {
        minimizer: [
            new HtmlWebpackPlugin({
                favicon: "./src/assets/icons/favicon.ico",
                template: "src/index.html",
            }),
            new CssMinimizerPlugin(),
        ]
    },

    module: {
        rules: [
            {
                test: /\.(sass|s?css)$/,
                exclude: /node_modules/,
                use: [
                    "style-loader",
                    "css-loader",
                    "postcss-loader",
                    "sass-loader",
                ],
            },
        ],
    },
});