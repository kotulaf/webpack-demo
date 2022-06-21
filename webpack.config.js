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
    parts.clean(),
    parts.setFreeVariable("HELLO", "hello from config")
]);

const productionConfig = merge([
    parts.eliminateUnusedCss(),
    {
        optimization: {
            splitChunks: { chunks: "all" },
            runtimeChunk: { name: "runtime" },
        },
    },
    parts.attachRevision(),
    parts.minifyJavaScript(),
    parts.minifyCSS({ options: { preset: ["default"] } }),
    {
        output: {
            chunkFilename: "[name].[contenthash].js",
            filename: "[name].[contenthash].js",
            assetModuleFilename: "[name].[contenthash][ext][query]",
        },
    },
    { recordsPath: path.join(__dirname, "records.json") },
    {
        performance: {
            hints: "warning", // also could be "error" or false instead
            maxEntrypointSize: 50000, // in bytes, default is 250k
            maxAssetSize: 100000, // in bytes
        },
    },
]);

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