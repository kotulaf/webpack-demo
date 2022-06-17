const {WebpackPluginServe} = require("webpack-plugin-serve");
const {
    MiniHtmlWebpackPlugin,
} = require("mini-html-webpack-plugin");
const { plugins } = require("./webpack.config");
const loader = require("css-loader");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");
const glob = require("glob");
const PurgeCssPlugin = require("purgecss-webpack-plugin");

const ALL_FILES = glob.sync(path.join(__dirname, "src/*.js"));

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

exports.loadCSS = () => ({      // files ending with CSS will invoke the given loaders
    module: {
        rules: [
            {test: /\.css$/, use: ["style-loader", "css-loader"]},  // css-loader evaluates the import and url() definitions, style-loader converts it to JavaScript and implements webpack's HMR interface
        ],
    },
});

exports.extractCSS = ({options = {}, loaders = []} = {}) => {
    return {
        module: {
            rules: [
                {
                    test: /\.css$/,
                    use: [
                        {loader: MiniCssExtractPlugin.loader, options},
                        "css-loader",
                    ].concat(loaders),
                    sideEffects: true,
                },
            ],
        },
        plugins: [
            new MiniCssExtractPlugin({
                filename: "[name].css",     // name placeholder uses the name of the entry where the CSS is reffered
            }),
        ],
    };
};

exports.tailwind = () => ({
    loader: "postcss-loader",
    options: {
        postcssOptions: {plugins: [require("tailwindcss")]},
    },
});

exports.eliminateUnusedCss = () => ({               // we configure this to eliminate all the CSS that we don't need
    plugins: [
        new PurgeCssPlugin({
            paths: ALL_FILES, // consider extracting as a parameter
            extractors: [
                {
                    extractor: (content) =>
                        content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || [],
                        extensions: ["html"],
                },
            ],
        }),
    ],
});

exports.autoprefix = () => ({
    loader: "postcss-loader",
    options: {
        postcssOptions: {plugins: [require("autoprefixer")()]},
    },
});

exports.loadImages = ({limit} = {}) => ({
    module: {
        rules: [
            {
                test: /\.(png|jpg)$/,
                type: "asset",
                parser: {dataUrlCondition: {maxSize: limit}},
            },
        ],
    },
});