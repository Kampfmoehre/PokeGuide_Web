// var webpack = require('webpack');
// var HtmlWebpackPlugin = require('html-webpack-plugin');
// var ExtractTextPlugin = require('extract-text-webpack-plugin');
// var CopyWebpackPlugin = require('copy-webpack-plugin');
// var helpers = require('./helpers');
//
// // ************************************************************************************
// // Gather node modules for nw.js
// var fs = require('fs');
// var nodeModules = {};
// fs.readdirSync('node_modules')
//     .filter(function(x) {
//         return ['.bin'].indexOf(x) === -1;
//     })
//     .forEach(function(mod) {
//         nodeModules[mod] = 'commonjs ' + mod;
//     });
// // ************************************************************************************
// //
// //
// module.exports = {
//     cache: true,
//     debug: true,
//     devServer: {
//         historyApiFallback: true,
//         stats: 'minimal'
//     },
//     devtool: false,
//     entry: [
//         // 'webpack/hot/only-dev-server',
//         './src/app.jsx'
//     ],
//     // externals: nodeModules,
//     module: {
//         loaders: [{
//             test: /\.jsx?/,
//             exclude: /node_modules/,
//             loader: 'babel-loader'
//         }, {
//             test: /\.html$/,
//             loader: 'html'
//         }, {
//             test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
//             loader: 'file?name=assets/[name].[hash].[ext]'
//         }, {
//             test: /\.css$/,
//             exclude: helpers.root('src', 'app'),
//             loader: ExtractTextPlugin.extract('style', 'css?sourceMap')
//         // }, {
//         //     test: /\.css$/,
//         //     loader: ExtractTextPlugin.extract("style-loader", "css-loader")
//         }, {
//             test: /\.css$/,
//             include: helpers.root('src', 'app'),
//             loader: 'raw'
//         }]
//     },
//     output: {
//         path: './dist/dev',
//         chunkFilename: "[id].chunk.js",
//         filename: '[name].js',
//         target: 'node-webkit'
//     },
//     plugins: [
//         new webpack.optimize.CommonsChunkPlugin({
//             name: ['app', 'vendor', 'polyfills']
//         }),
//         new webpack.HotModuleReplacementPlugin(),
//         new webpack.NoErrorsPlugin(),
//         new HtmlWebpackPlugin({
//             template: 'src/index.html'
//         }),
//         new ExtractTextPlugin('[name].css'),
//         new CopyWebpackPlugin([{
//             from: 'src/nw.package.json',
//             to: 'package.json'
//         }, {
//             from: 'data/pokedex.sqlite',
//             to: 'data/pokedex.sqlite'
//         }])
//     ],
//     resolve: {
//         extensions: ['', '.js', '.jsx', '.json']
//     },
//     stats: {
//         colors: true,
//         reasons: true
//     }
// };

var webpack = require('webpack');
var webpackMerge = require('webpack-merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var commonConfig = require('./webpack.common.js');
var helpers = require('./helpers');

module.exports = webpackMerge(commonConfig, {
    // devtool: 'cheap-module-eval-source-map',
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
