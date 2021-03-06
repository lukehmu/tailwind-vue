const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const {
  VueLoaderPlugin
} = require('vue-loader')

module.exports = {
  entry: {
    app: './src/index.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'Handlebars template',
      template: './src/index.html'
    }),
    new VueLoaderPlugin()
  ],
  module: {
    rules: [{
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
