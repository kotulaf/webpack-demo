const {WebpackPluginServe} = require("webpack-plugin-serve");
const {
    MiniHtmlWebpackPlugin,
} = require("mini-html-webpack-plugin");
const { plugins } = require("./webpack.config");
const loader = require("css-loader");

exports.devServer = () => ({
    watch: true,
    plugins: [
        new WebpackPluginServe({
            port: parseInt(process.env.port, 10) || 8080,         /* we want it to be a decimal number, therefore we say 10, with this we are saying the port is whatever is in the variable or 8080 */
            static: "./dist",           /* expose if output.path changes */
            liveReload: true,
            waitForBuild: true,
        }),
    ],
});

exports.page = ({title}) => ({
    plugins: [new MiniHtmlWebpackPlugin({context: {title}})], /* the title here does not need to be specified as this is a module that webpack config will be loading */
});

exports.loadCSS = () => ({
    module: {
        rules: [
            {test: /\.css$/, use: ["style-loader", "css-loader"]},
        ],
    },
});