const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')


module.exports = {
  entry: {
    reveal: './index.js',
  },
  output: {
    path: path.resolve(__dirname, '../assets/static/slides/'),
    filename: '[name].js'
  },
  mode: 'production',
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.pug$/,
        use: 'pug-loader'
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf|png|jpg)$/,
        use: 'file-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'making_architecture_matter/index.pug',
      filename: 'making_architecture_matter.html'
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css'
    })
  ]
}
