const {mode} = require("webpack-nano/argv"); /* connect the mini-html-webpack-plugin into webpack */
const {merge} = require("webpack-merge");
const parts = require("./webpack.parts"); /* requiring the parts file we just created for the config */

const commonConfig = merge([
    {entry: ["./src"]},
    parts.page({title: "Demo"}),
]);

const productionConfig = merge([]);

const developmentConfig = merge([
    {entry: ["webpack-plugin-serve/client"]},
    parts.devServer(),
]);

const getConfig = (mode) => {
    switch(mode) {
        case "production" :
            return merge(commonConfig, productionConfig, {mode});
        case "development" :
            return merge(commonConfig, developmentConfig, {mode});
        default:
            throw new Error(`Trying to use an unknown mode, ${mode}`);
    }
};

module.exports = getConfig(mode);