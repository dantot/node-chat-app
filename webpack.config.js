const webpack = require('webpack');
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const useDevServer = true;

module.exports = {
    entry: {
        bundle: './assets/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js',
        publicPath: useDevServer
            ? 'http://localhost:8080/public/'
            : '/public/'
    },
    // devtool: 'source-map',
    module: {
        rules: [
            {
               test: /\.css$/,
               use: ExtractTextPlugin.extract({
                   fallback: "style-loader",
                   use: "css-loader"
               })
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("style.css"),
        new webpack.ProvidePlugin(
            {jQuery: 'jquery', $: 'jquery', 'window.jQuery': 'jquery'}
        ),
        new CopyWebpackPlugin([
            {
                from: './node_modules/emojify.js/dist/images/basic',
                to: 'emojify'
            }, {
                from: './assets/index.html',
                to: 'index.html'
            }, {
                from: './assets/chat.html',
                to: 'chat.html'
            }
        ]),
        new webpack.optimize.UglifyJsPlugin()
    ]
};
