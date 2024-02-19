const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      // For enabling .module.css files
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader, // instead of "style-loader",
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
              // modules: true,
              modules: {
                localIdentName: "[path][name]__[local]--[hash:base64:5]",
              },
            },
          },
        ],
        include: /\.module\.css$/,
      },
      // for enabling .css file only
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader, // instead of "style-loader",
          "css-loader",
        ],
        exclude: /\.module\.css$/,
      },

      // use svg as react component
      // {
      //   test: /\.svg$/i,
      //   issuer: /\.[jt]sx?$/,
      //   use: [
      //     { loader: "@svgr/webpack", options: { icon: true } },
      //     "url-loader",
      //   ], // use url-loader to import svg as image
      // },

      // above method is depcrecated in webpack, recommended to use type: asset
      {
        test: /\.svg$/i,
        type: "asset",
        resourceQuery: /url/, // *.svg?url
      },
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        resourceQuery: { not: [/url/] }, // exclude react component if *.svg?url
        use: ["@svgr/webpack"],
      },

      // images (png/jpg/gif) loader, it will be stored into the path specified under output for assetModuleFilename
      {
        test: /\.(png|jpg|gif)$/i,
        type: "asset/resource",
      },
      // webp loader
      {
        test: /\.webp$/i,
        type: "asset/resource",
        generator: {
          filename: "static/[hash][ext][query]", // for storing the webp in static folder inside dist
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      filename: "./index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css", // Specify the filename for the extracted CSS
    }),
  ],
  // Entry point to the application
  entry: ["./src/index.js"],
  // for clearing the dist folder, everytime we build
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
    assetModuleFilename: "images/[hash][ext][query]", // for storing the assets in images folder inside dist
  },
};
