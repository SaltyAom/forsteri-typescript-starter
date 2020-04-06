const { join } = require("path"),
    TerserPlugin = require("terser-webpack-plugin")

module.exports = {
    mode: "production",
    context: join(__dirname, "src"),
    entry: ["./index.tsx"],
    output: {
        path: join(__dirname, "dist"),
        filename: "bundle.js",
        chunkFilename: '[name].bundle.js',
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
            chunks: "all",
            minSize: 30000,
            maxSize: 0,
            minChunks: 128,
            maxAsyncRequests: 6,
            maxInitialRequests: 4,
            automaticNameDelimiter: "~",
            name: true,
            cacheGroups: {
                defaultVendors: {
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10
                },
                default: {
                    minChunks: 2,
                    priority: -20,
                    reuseExistingChunk: true
                }
            }
        }
    }
}
