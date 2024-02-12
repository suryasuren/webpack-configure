const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.[contenthash].js",
    path: path.resolve(__dirname, "./dist"),
    publicPath: "./dist/",
  },
  mode: "none",
  module: {
    rules: [
      {
        test: /\.(png|jpg|jpeg)$/,
        use: ["file-loader"],
      },
      {
        test: /\.(css|scss|sass)$/,
        use: [
          // "style-loader", -> this is used only if we are not extracting the css from the bundle js
          MiniCssExtractPlugin.loader, // if we need to extract css from bundle, use this, so that size will reduce
          "css-loader",
          {
            loader: "sass-loader",
            options: {
              implementation: require("sass"),
            },
          },
        ],
      },
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
    ],
  },
  // Plugin: [new TerserPlugin()], // Previously
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin(),
      new MiniCssExtractPlugin({ filename: "main.[contenthash].css" }),
      new CleanWebpackPlugin(),
    ],
  },
};
