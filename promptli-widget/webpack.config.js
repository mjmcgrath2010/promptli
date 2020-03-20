const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  output: {
    library: "PromptliWidget",
    libraryTarget: "umd",
    umdNamedDefine: true
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      }
    ]
  },
  devServer: {
    port: 3001,
    host: '0.0.0.0',
    contentBasePublicPath: '/public-assets/widget',
    allowedHosts: [
      'dev.promptli.app'
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    })
  ]
};
