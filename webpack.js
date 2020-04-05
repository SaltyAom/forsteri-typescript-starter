const { join } = require("path"),
    webpack = require("webpack")

module.exports = {
    mode: "development",
    context: join(__dirname, "src"),
    entry: ["webpack-hot-middleware/client", "./index.tsx"],
    output: {
        path: join(__dirname, "public"),
        filename: "bundle.js"
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"]
    },
    plugins: [new webpack.HotModuleReplacementPlugin()],
    module: {
        rules: [
            {
                test: /\.js$/,
                use: ["babel-loader"],
                exclude: /node_modules/
            },
            {
                test: /\.tsx?$/,
                use: ["ts-loader"],
                include: join(__dirname, "src"),
                exclude: /node_modules/
            }
        ]
    }
}
