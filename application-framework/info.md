
##### Initialise project
`npm init -y`

##### Install webpack and webpack-cli
`npm install --save-dev webpack webpack-cli`

##### Add scripts in `package.json`
```javascript
  "scripts": {
    "start": "webpack --mode=development",
    "build": "webpack --mode=production"
  },
```

##### Configuring Webpack for React
`npm install react react-dom`
`npm install --save-dev @babel/core babel-loader @babel/preset-env @babel/preset-react`

##### Configure CSS and CSS modules
`npm install --save-dev style-loader css-loader`


##### Configuring webpack and babel

Create `babel.config.json` in the root folder and put
```json
  {
    "presets": [
      [
        "@babel/preset-env",
        {
          "targets": {
            "esmodules": true
          }
        }
      ],
      [
        "@babel/preset-react",
        {
          "runtime": "automatic"
        }
      ]
    ]
  }
```

Create webpack.config.js and put

```javascript
const HtmlWebpackPlugin = require("html-webpack-plugin");

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
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      filename: "./index.html",
    }),
  ],
};

```

##### Extract the CSS to its own styles.css

`npm install --save-dev mini-css-extract-plugin`

Put the plugins in the `webpack.config.js`

```javascript

const MiniCssExtractPlugin = require("mini-css-extract-plugin")

plugins: [
  new MiniCssExtractPlugin(),
]
```


##### Configure the module.css in webpack

Put the following in the webpack.config.js

```javascript
{
  test: /\.css$/,
  use: [
    'style-loader',
    {
      loader: 'css-loader',
      options: {
        importLoaders: 1,
        modules: true
      }
    }
  ]
}
```