const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require ("webpack");

const locales = ["en-GB"];

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  devtool: "eval-source-map",
  devServer: {
    watchFiles: ["./src/template.html"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html",
    }),
    new webpack.ContextReplacementPlugin(
      /date-fns[/\\]locale/,
      new RegExp(`(${locales.join("|")})\.js$`),
    ),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
  resolve: {
    alias: {
      "date-fns-locale": path.dirname(require.resolve("date-fns/package.json")),
    },
  },
};