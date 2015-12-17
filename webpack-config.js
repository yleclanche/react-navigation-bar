var webpack = require('webpack');
var path = require("path");

module.exports = {

    entry: {
        "bundled-example": "./examples/example.js",
        "react-horizontal-menu": "./index.js"
    },
    output: {
        path: path.join(__dirname, "dist"),
        filename: "[name].js",
        chunkFilename: "[id].chunk.js"
    },

    module: {
        loaders: [
            {test: /\.js$/, exclude: /node_modules/, loader: 'babel'},
            {test: /\.less$/, exclude: /node_modules/, loader: "style!css!less"}
        ]
    },

    node: {
        Buffer: false
    },

    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
        })
    ]

}