const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
  mode: 'production',
  optimization: {
    minimize: true,
    minimizer: [new UglifyJsPlugin()],
  },
}
