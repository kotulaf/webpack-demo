const {mode} = require("webpack-nano/argv"); /* connect the mini-html-webpack-plugin into webpack */
const {merge} = require("webpack-merge");
const parts = require("./webpack.parts"); /* requiring the parts file we just created for the config */
const cssLoaders = [parts.autoprefix(), parts.tailwind()];
const path = require("path");

const commonConfig = merge([
    {entry: ["./src"]},
    parts.page({title: "Demo"}),
    parts.extractCSS({loaders: cssLoaders}),
    parts.loadImages({limit: 15000}),
    parts.loadJavaScript(),
    parts.clean()
]);

const productionConfig = merge([
    parts.eliminateUnusedCss(),
    { optimization: { splitChunks: { chunks: "all"}}},
]);

const developmentConfig = merge([
    {entry: ["webpack-plugin-serve/client"]},
    parts.devServer(),
]);

const getConfig = (mode) => {
    switch(mode) {
        case "production" :
            return merge(commonConfig, productionConfig, {mode : "none"});
        case "development" :
            return merge(commonConfig, developmentConfig, {mode});
        default:
            throw new Error(`Trying to use an unknown mode, ${mode}`);
    }
};

module.exports = getConfig(mode);