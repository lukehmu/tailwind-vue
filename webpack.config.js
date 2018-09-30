const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
// const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack')
const {
  VueLoaderPlugin
} = require('vue-loader')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    // new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'Handlebars template',
      template: './src/index.html'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new VueLoaderPlugin()
  ],
  // devtool: 'inline-source-map',
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    hot: true
  },
  module: {
    rules: [{
      test: /\.css$/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            importLoaders: 1
          }
        },
        'postcss-loader'
      ]
    },
    {
      test: /\.handlebars$/,
      loader: 'handlebars-loader'
    },
    {
      test: /\.vue$/,
      loader: 'vue-loader'
    },
    {
      test: /\.js$/,
      exclude: /node_modules/,
      use: ['babel-loader']
    },
    {
      test: /\.(js|vue)$/,
      use: ['eslint-loader'],
      enforce: 'pre'
    }
    ]
  }
}
