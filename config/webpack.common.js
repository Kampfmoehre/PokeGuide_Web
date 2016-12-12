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
    entry: {
        'polyfills': './src/polyfills.ts',
        'vendor': './src/vendor.ts',
        'app': './src/main.ts'
    },

    resolve: {
        extensions: ['', '.js', '.ts']
    },

    externals: nodeModules,

    module: {
        loaders: [{
            test: /\.ts$/,
            loaders: ['awesome-typescript-loader', 'angular2-template-loader']
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
        }]
    },

    plugins: [
        // splits app and vendor code into separate js files
        new webpack.optimize.CommonsChunkPlugin({
            name: ['app', 'vendor', 'polyfills']
        }),
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
    ]
};
