const HtmlWebPackPlugin = require("html-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const path = require("path");
const PostCompile = require("post-compile-webpack-plugin");
const spawn = require("cross-spawn");

module.exports = {
  output: {


    library: "PromptliWidget",
    libraryTarget: "umd",
    umdNamedDefine: true
  },
  resolve: {
    alias: {
      react: "preact/compat",
      "react-dom/test-utils": "preact/test-utils",
      "react-dom": "preact/compat"
      // Must be below test-utils
    }
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
    host: "0.0.0.0",
    contentBasePublicPath: "/public-assets/widget",
    contentBase: path.resolve(__dirname, "dist"),
    allowedHosts: ["dev.promptli.app"]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    }),
    new PostCompile(() => {
      console.log("Building Widget");
      spawn("yarn", "build", { shell: true });
    })
  ],
  optimization: {
    minimizer: [new UglifyJsPlugin()]
  }
};
