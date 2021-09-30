const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "development",
  entry: ["regenerator-runtime/runtime.js", "src/index.js"],
  devtool: "inline-source-map",
  devServer: {
    static: {
      staticOptions: {},
      publicPath: "/static-public-path/",
      serveIndex: true,
      watch: true,
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Development",
      template: "./src/index.html",
      filename: "./index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css",
    }),
  ],

  module: {
    rules: [
      {
        test: /\.html$/i,
        use: [{ loader: "html-loader", options: { minimize: true } }],
      },
      {
        test: /\.scss$/i,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        exclude: /node_modules/,
        type: "asset/resource",
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [["@babel/preset-env", { targets: "defaults" }]],
          },
        },
      },
    ],
  },
};
