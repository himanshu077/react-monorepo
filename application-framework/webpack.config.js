const path = require("path");

module.exports = {
  mode: "production",
  entry: "./src/index.ts",
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "dist"),
    library: "ui-lib",
    libraryTarget: "umd"
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: ["ts-loader"],
      },
    ],
  },
  externals: {
    react: "react",
  },
  resolve: {
    extensions: [".tsx", ".ts"],
  },
};
