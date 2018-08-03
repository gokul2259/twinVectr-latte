var webpack = require('webpack');
var UglifyJSPlugin = require('uglifyjs-webpack-plugin');

var webpackConfig =  require('./webpack.config.js');

var productionPlugins = [
    new webpack.DefinePlugin({
        'PRODUCTION': JSON.stringify(true)
    }),
    new UglifyJSPlugin(),
];

webpackConfig.plugins = webpackConfig.plugins.concat(productionPlugins);

module.exports = webpackConfig;