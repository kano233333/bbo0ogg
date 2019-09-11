const webpack = require('webpack');
const path = require('path');
const htmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
var hotMiddlewareScript = 'webpack-hot-middleware/client';
  
module.exports = {
  entry: {
    entry: [
      // hotMiddlewareScript,
      './views/App.js'
    ]
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
        // loaders:['react-hot-loader','babel-loader'],
        query:{
          presets:['react','es2015']
        }
      },
      {
        test: /\.sass|\.scss$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test:/\.(png|jpg|gif|svg|jpeg)$/,
        use:["url-loader"]
      }
    ]
  },
  plugins: [
    new htmlWebpackPlugin({
      filename: "index.html",
      template: "./views/index.html",
      inject: "body"
    }),
    // new ExtractTextPlugin("./public/dist/stylesheets/main.css")
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ] 
}