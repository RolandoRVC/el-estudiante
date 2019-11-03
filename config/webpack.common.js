const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const htmlWebpack = new HtmlWebpackPlugin({
    template: "./src/index.html"
});

module.exports = {
    entry: "./src/js/main.js",
    output: {
        path : path.resolve("build"),
        filename: "js/bundle.js"
    },
    plugins:[htmlWebpack],
    module:{
        rules:[
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.jpg$/,
                loader: "url-loader"
            }
        ]
    }
}