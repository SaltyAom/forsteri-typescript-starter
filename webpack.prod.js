const { join } = require("path"),
    TerserPlugin = require("terser-webpack-plugin")

module.exports = {
    mode: "production",
    context: join(__dirname, "src"),
    entry: ["./index.tsx"],
    output: {
        path: join(__dirname, "dist"),
        filename: "[name].bundle.js"
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"]
    },
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
    },
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin()],
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: "vendors",
                    chunks: "all"
                }
            }
        }
    }
}
