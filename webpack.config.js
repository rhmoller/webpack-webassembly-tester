const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    experiments: {
        asyncWebAssembly: true
    },
    plugins: [
        new HtmlWebpackPlugin()
    ]
};
