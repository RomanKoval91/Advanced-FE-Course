const path = require('path')
const htmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: 'development',

    entry: {
    filename: path.resolve(__dirname, 'src/index.js'),
    },

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name][contenthash].js',
        assetModuleFilename: '[name][ext]',
        clean: true
    },

    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ["style-loader", "css-loader", "sass-loader"],
            },
            {
                test: /\.(png|svq|jpg|jpeq|gif)$/i,
                type: "asset/resource",
            },
        ],
    },

    performance: {
        hints: false,
        maxAssetSize: 512000,
        maxEntrypointSize: 512000,
    },

    plugins: [
        new htmlWebpackPlugin({
            title: "Webpack",
            filename: "index.html",
            template: "src/index.html",
        }),
    ],

};




