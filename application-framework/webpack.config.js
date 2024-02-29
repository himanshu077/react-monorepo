const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require("webpack");
const Dotenv = require("dotenv-webpack");

module.exports = (env) => ({
  // entry: './src/index.js',
  // output: {
  //   path: path.resolve(__dirname, 'dist'),
  //   filename: 'bundle.js',
  // },
  // Entry point to the application
  entry: ["./src/index.jsx"],
  // for clearing the dist folder, everytime we build
  output: {
    filename: "[name].bundle.js",
    // filename: "index.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
    assetModuleFilename: "images/[hash][ext][query]", // for storing the assets in images folder inside dist

    // for export as component library
    library: "application-framework",
    libraryTarget: "umd",
    umdNamedDefine: true,
    globalObject: "this",
  },
  // react is going to be an external dependency, so it should not be parsed by webpack
  externals: {
    react: "react",
    tailwindcss: "tailwindcss",
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, "dist"),
    },
    port: 3000,
    open: true,
    hot: true,
    compress: true,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // for supporting .js and .jsx files
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          // for enabling react and es6 features
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
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
          "postcss-loader",
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
    new Dotenv({
      path: `./.env${env.file ? `.${env.file}` : ""}`,
    }),
  ],
});
