const webpack = require('webpack');
const path = require('path');
const htmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const FileManagerPlugin = require("filemanager-webpack-plugin");
var hotMiddlewareScript = 'webpack-hot-middleware/client';

module.exports = {
  entry: {
    index: ['./views/App.js']
  },
  mode: process.env.NODE_ENV,
  output: {
    path: path.resolve(__dirname, './public/dist'),
    filename: "bundle.js",
    chunkFilename: "[name].js",
    publicPath: "/"
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
        use: ['style-loader', 'css-loader', 'sass-loader', {
          loader: 'sass-resources-loader',
          options: {
            resources: path.resolve(__dirname, './public/src/stylesheets/const.scss')
          }
        }]
      },
      {
        test:/\.(png|jpg|gif|svg|jpeg)$/,
        use:["url-loader"]
      }
    ]
  },

  /*
   * splitChunks 拆分代码
   *    - node_modules
   *    - react
   *    - markdown
   *    - highlight
   */
  optimization: {
    splitChunks: {
      chunks: 'all', 
      minSize: 30000,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      name: true,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors'
        },
        'react-vendor': {
          test: (module, chunks) => /react/.test(module.context),
          priority: 1,
          name:'react-vendor'
        },
        'markdown-vendor': {
          test: (module, chunks) => /markdown|highlight/.test(module.context),
          priority: 2,
          name:'markdown-vendor'
        },
        // 'highlight-vendor': {
        //   test: (module, chunks) => /highlight/.test(module.context),
        //   priority: 2,
        //   name:'highlight-vendor'
        // }
      }
    }
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
    //   onEnd: [
    //     { 
    //       move: [
    //         { source: "/", destination: "/" }
    //       ]
    //     }
    //   ]
    // })
  ] 
}