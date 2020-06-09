const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
require('dotenv').config()

module.exports = {
  mode: 'production',
  optimization: {
    minimize: true,
    minimizer: [new UglifyJsPlugin()],
  },
}
