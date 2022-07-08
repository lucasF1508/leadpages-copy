const path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");

var config = {
  output: {
    library: {
      commonjs: "@lp/events-js",
      amd: "LPEvents",
      root: "LPEvents",
    },
    filename: "index.js",
    libraryTarget: "umd",
  },
  plugins: [],
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [path.resolve(__dirname, "src")],
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
};

module.exports = (env, argv) => {
  if (argv.mode === "development") {
    config.devtool = "source-map";
    config.plugins.push(
      new HtmlWebpackPlugin({
        template: "test/index.ejs",
      }),
    );
  }
  return config;
};
