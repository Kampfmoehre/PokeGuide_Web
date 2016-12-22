var webpack = require('webpack');
var webpackMerge = require('webpack-merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var commonConfig = require('./webpack.common.js');
var helpers = require('./helpers');

module.exports = webpackMerge(commonConfig, {
    devtool: 'cheap-module-eval-source-map',
    cache: true,
    debug: true,
    devServer: {
        historyApiFallback: true,
        stats: 'minimal'
    },
    devtool: false,
    entry: [
        // 'webpack-dev-server/client?http://0.0.0.0:8080',
        // 'webpack/hot/only-dev-server',
        './src/app.jsx'
    ],
    output: {
        path: helpers.root('dist/dev'),
        publicPath: '/',
        filename: '[name].js',
        chunkFilename: '[id].chunk.js',
        target: 'node-webkit'
    },
    plugins: [
        new ExtractTextPlugin('[name].css'),
        new webpack.HotModuleReplacementPlugin()
    ],
    stats: {
        colors: true,
        reasons: true
    }
});
