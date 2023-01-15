const postcssPresetEnv = require("postcss-preset-env");
const purgecss = require("@fullhuman/postcss-purgecss");

module.exports = {
    plugins: [
        purgecss({
            content: ["./src/**/*.html", "./src/**/*.tsx", "./src/**/*.js"],
            safelist: ["toaster--success", "toaster--error", "toaster--info", "toaster--warning"],
        }),
        postcssPresetEnv({
            browsers: "last 2 versions",
        }),
    ],
};