const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const BUILD_DIR = path.join(__dirname, '/../../build')
const SRC_DIR = path.join(__dirname, '/../../src')

module.exports = {
  devServer: {
    contentBase: BUILD_DIR,
    contentBasePublicPath: '/static/widget',
    port: 3001,
    host: '0.0.0.0',
    hot: true,
    writeToDisk: true,
    allowedHosts: ['dev.promptli.app', '0.0.0.0'],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin({}),
    new HtmlWebpackPlugin({
      title: 'Promptli Widget',
      template: `${SRC_DIR}/index.html`,
    })
  ],
}
