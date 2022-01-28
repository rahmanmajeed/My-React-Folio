const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "development",
  devServer: {
    port: 8080,
  },
  entry: {
    index: "./src/index.js",
  },
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      filename: "./index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "main.css",
      // chunkFilename:'main.css'
    }),
  ],
  module: {
    rules: [
      {
        // "test" identify which files & folders should be transformed
        test: /\.js$/,
        // "use" indicate which loaders should be used for transforming.
        use: {
          // if here only "babel-loader" you can load  options section from `.babelrc` file `presets
          loader: "babel-loader",
          //   options: {
          //     presets: [
          //       "@babel/preset-env",
          //       ["@babel/preset-react", { runtime: "automatic" }],
          //     ],
          //     plugins: ["@babel/plugin-transform-runtime"],
          //   },
        },
        exclude: /node_modules/,
      },
      {
        test: /\.(s[ac]|c)ss$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ],
  },
};
