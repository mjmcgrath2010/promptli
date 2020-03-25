const HtmlWebPackPlugin = require('html-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const path = require('path')

const APP_DIR = path.resolve(__dirname, 'src')
const BUILD_DIR = path.resolve(__dirname, 'build')

module.exports = {
  entry: {
    main: APP_DIR + '/index.js',
  },
  output: {
    library: 'PromptliWidget',
    libraryTarget: 'umd',
    umdNamedDefine: true,
    filename: 'promptli.js',
    path: BUILD_DIR,
  },
  resolve: {
    alias: {
      react: 'preact/compat',
      'react-dom/test-utils': 'preact/test-utils',
      'react-dom': 'preact/compat',
    },
  },
  devServer: {
    contentBase: BUILD_DIR,
    contentBasePublicPath: '/static/widget',
    port: 3001,
    host: '0.0.0.0',
    hot: true,
    writeToDisk: true,
    allowedHosts: ['dev.promptli.app'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: './index.html',
    }),
  ],
  optimization: {
    minimizer: [new UglifyJsPlugin()],
  },
}
