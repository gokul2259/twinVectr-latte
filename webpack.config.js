const path = require('path');

module.exports = {
    entry: "frontend/app.js",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "bundle.js"
    },
    plugins: [
   // Adding our UglifyJS plugin
   new UglifyJSPlugin()
 ],
}
module: {
  rules: [
    {
      test: /\.js$/,
      exclude: /(node_modules)/,
      use: {
        loader: 'babel-loader',
        options: {
         presets: ['env']
        }
      }
    },
    {
      test: /\.(png|svg|jpg|gif)$/,
      use: [
        'file-loader'
      ]
    }
  ]
}
