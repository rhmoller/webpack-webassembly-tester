const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "app.js",
        path: path.resolve(__dirname, "dist")
    },
    module: {
        rules: [
            {
                test: /\.wasm$/,
                type: "webassembly/experimental"
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin()
    ]
};
