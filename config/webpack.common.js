var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var helpers = require('./helpers');

// ************************************************************************************
// Gather node modules for nw.js
var fs = require('fs');
var nodeModules = {};
fs.readdirSync('node_modules')
    .filter(function(x) {
        return ['.bin'].indexOf(x) === -1;
    })
    .forEach(function(mod) {
        nodeModules[mod] = 'commonjs ' + mod;
    });
// ************************************************************************************
//
module.exports = {
    // externals: fs.readdirSync("node_modules").map(function(module) {
    //     return "commonjs " + module
    // }),
    externals: {
        sqlite3: 'commonjs sqlite3'
    },
    // externals: [nodeModules],
    global: true,
    node: {
        fs: "empty"
    },
    module: {
        loaders: [{
            test: /\.jsx?/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }, {
            test: /\.html$/,
            loader: 'html'
        }, {
            test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
            loader: 'file?name=assets/[name].[hash].[ext]'
        }, {
            test: /\.css$/,
            exclude: helpers.root('src', 'app'),
            loader: ExtractTextPlugin.extract('style', 'css?sourceMap')
        }, {
            test: /\.css$/,
            include: helpers.root('src', 'app'),
            loader: 'raw'
        }, {
            test: /\.json$/,
            loader: 'json-loader'
        }]
    },
    plugins: [
        // splits app and vendor code into separate js files
        new webpack.optimize.CommonsChunkPlugin({
            name: ['app', 'vendor', 'polyfills']
        }),
        new webpack.NoErrorsPlugin(),
        // injects generated js files into index.html
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        }),
        // copy database and extra package.json for nw,js
        new CopyWebpackPlugin([{
            from: 'src/nw.package.json',
            to: 'package.json'
        }, {
            from: 'data/pokedex.sqlite',
            to: 'data/pokedex.sqlite'
        }])
    ],
    resolve: {
        extensions: ['', '.js', '.jsx', '.json'],
        moduleDirectories: ['node_modules']
    },
};
