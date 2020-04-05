const express = require("express"),
    webpackDevMiddleware = require("webpack-dev-middleware"),
    webpack = require("webpack"),
    webpackConfig = require("./webpack.js"),
    app = express(),
    webpackHotMiddleware = require("webpack-hot-middleware")

const compiler = webpack(webpackConfig)

app.use(
    webpackDevMiddleware(compiler, {
        hot: true,
        filename: "bundle.js",
        publicPath: "/",
        stats: {
            colors: true,
        },
        historyApiFallback: true,
    })
)
    .use(webpackHotMiddleware(compiler))
    .use(express.static(__dirname + "/public"))

const server = app.listen(3000, function () {
    const host = server.address().address
    const port = server.address().port
    console.log("Example app listening at http://%s:%s", host, port)
})
