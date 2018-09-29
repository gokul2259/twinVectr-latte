var path = require('path');
var entryPointfetcher = require('./build/entryPointFetcher.js');
const CleanWebpackPlugin = require('clean-webpack-plugin');
var ROOT = __dirname;
var JS_ROOT = path.resolve(ROOT,'frontend');
var desktopEntries = entryPointfetcher(JS_ROOT, 'entries/desktop/**/*.js');

const pathsToClean = [
  'dist',
];

const cleanOptions = {
  root:  __dirname,
  verbose:  true,
  dry:      false
};

module.exports = {
    entry: desktopEntries,
    output: {
        path: path.resolve(ROOT, 'dist/js-chunks'),
        filename: '[name].[hash:8].bundle.js',
        chunkFilename: '[id].[hash:8].chunk.js',
    },
    resolve: {
      modules:[
        JS_ROOT,
        'node_modules'
      ],
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /(node_modules)/,
          use: {
            loader: 'babel-loader',
            options: {
             presets: ['env', 'react', "es2015"],
           },
         },
        },
        {
          test: /\.(png|svg|jpg|gif)$/,
          use: [
            'file-loader'
          ],
        },
        {
          test: /\.css$/,
          use: [ 'style-loader', 'css-loader' ]
        },
      ],
    },
    mode: 'development',
    plugins: [
      new CleanWebpackPlugin(pathsToClean, cleanOptions),
    ],
}
