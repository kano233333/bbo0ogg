const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const webpackConfig = require('./webpack.config')

module.exports = app => {
  let compiler = webpack(webpackConfig)

  app.use(webpackDevMiddleware(compiler, {
    publicPath: '/',
    stats: {
      colors: true,
      chunks: false
    }
  }))
  var hotMiddleware = webpackHotMiddleware(compiler,{
    log: false,
    heartbeat: 2000
  });
  app.use(hotMiddleware)  
}