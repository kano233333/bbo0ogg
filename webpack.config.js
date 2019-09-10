const webpack = require('webpack');
const path = require('path');
const htmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
var hotMiddlewareScript = 'webpack-hot-middleware/client'
  
module.exports = {
  entry: {
    entry: ['./views/App.js',hotMiddlewareScript]
  },
  mode: 'development',
  output: {
    path: path.resolve(__dirname, './public/dist'),
    filename: "bundle.js"
  },
  resolve: {
    extensions: ['.js', '.jsx','.css']
  },
  module: {
    rules: [
      {
        test: /\.js|\.jsx$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query:{
          presets:['react','es2015']
        }
      },
      {
        test: /\.sass|\.scss$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  plugins: [
    new htmlWebpackPlugin({
      filename: "index.html",
      template: "index.html",
      inject: "body"
    }),
    // new ExtractTextPlugin("./public/dist/stylesheets/main.css")
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ] 
}