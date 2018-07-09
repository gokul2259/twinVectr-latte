var path = require('path');
var UglifyJSPlugin = require('uglifyjs-webpack-plugin')
var entryPointfetcher = require('./build/entryPointFetcher.js');
var ROOT = __dirname;
var JS_ROOT = path.resolve(ROOT,'frontend');
var desktopEntries = entryPointfetcher(JS_ROOT, 'entries/desktop/**/*.js');

module.exports = {
    entry: desktopEntries,
    output: {
        path: path.resolve(ROOT, 'dist/js-chunks'),
        filename: '[name].bundle.js',
        chunkFilename: '[id].chunk.js',
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /(node_modules)/,
          use: {
            loader: 'babel-loader',
            options: {
             presets: ['env', 'react']
           },
         },
        },
        {
          test: /\.(png|svg|jpg|gif)$/,
          use: [
            'file-loader'
          ],
        },
      ],
    },
    mode: 'development',
    plugins: [
   // Adding our UglifyJS plugin
   new UglifyJSPlugin(),
 ],
}
