const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
//const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    //new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
        title: 'Handlebars template',
        template: './src/index.handlebars'
      })
  ],
  //devtool: 'inline-source-map',
    module: {
        rules: [
            {
              test: /\.css$/,
              use: [
                'style-loader',
                { loader: 'css-loader', options: { importLoaders: 1 } },
                'postcss-loader'
              ],
              
            },
            { test: /\.handlebars$/, loader: "handlebars-loader" },
          ]
    }
};