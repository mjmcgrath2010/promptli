const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const { NODE_ENV } = process.env

const APP_DIR = path.join(__dirname, '/../../src')
const BUILD_DIR = path.join(__dirname, '/../../build')

let envConfig

try {
  if (NODE_ENV) {
    envConfig = require(`./${NODE_ENV}`)
  } else {
    envConfig = require('./production')
  }
} catch (e) {
  envConfig = require('./production')
  console.log(e)
}

const sharedConfig = {
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
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [],
}

const webpackConfig = { ...sharedConfig, ...envConfig }
// Don't override plugins
webpackConfig.plugins.push(new CleanWebpackPlugin())

module.exports = webpackConfig
