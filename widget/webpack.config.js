const HtmlWebPackPlugin = require("html-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const path = require("path");
const PostCompile = require("post-compile-webpack-plugin");
const spawn = require("cross-spawn");

const APP_DIR = path.resolve(__dirname, "src");
const BUILD_DIR = path.resolve(__dirname, "build");

module.exports = {
  entry: {
    main: APP_DIR + "/index.js"
  },
  output: {
    library: "PromptliWidget",
    libraryTarget: "umd",
    umdNamedDefine: true,
    filename: "promptli.js",
    publicPath: "/static/widget",
    path: BUILD_DIR
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
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    }),
    new PostCompile(() => {
      console.log("Building Widget");
      spawn("yarn", "build", {});
    })
  ],
  optimization: {
    minimizer: [new UglifyJsPlugin()]
  }
};
