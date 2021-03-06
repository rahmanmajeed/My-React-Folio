# Configure React, TailwindCSS, TypeScript using `Webpack-v5` [webpack.config.js]

## Installation & Configuration

- Initialize _`package.json`_ file -

```sh
npm init -y
or
yarn init
```

- then, initialize the `Git`

```sh
git init
```

- Install `webpack`, `webpack-cli` & `webpack-dev-server`

```sh
yarn add webpack webpack-cli webpack-dev-server
or
npm i webpack webpack-cli webpack-dev-server
```

- Update `package.json`'s script section

```json
"scripts": {
    "start": "webpack --mode development",
    "build": "webpack --mode production"
  },
```

- Create an `entry` point for app by -`Create a src folder and create an index.js file inside it.`

```bash
  ...
  |-/
  | |-src
  |   |- index.js
  |...
```

- Test `webpack` is up & running properly

```sh
yarn start
```

> webpack 5.67.0 compiled successfully...
> Done in ...

assume webpack running properly.

- Create `.gitignore` file to ignore large files like `node_modules` by

```sh
touch .gitignore

```

### Configure [webpack](https://webpack.js.org/)

1. create `webpack.config.js` file in the `root` -

```sh
touch webpack.config.js
```

```bash
  ...
  |- /
  |  |- webpack.config.js
  |...
```

2. add **mode**, **dev-server** in `webpack.config.js`-

```javascript
module.exports = {
  mode: "development",
  devServer: {
    port: 8080,
  },
};
```

3. add a single `entry` point to `webpack.config.js`

```javascript
entry: {
  index: "./src/index.js";
}
```

4. add custom output path

```javascript
const path = require('path');

output:{
    filename:"main.js",
    path: path.resolve(__dirname,"dist"),
}
```

5. install package `webpack-dev-server` as devDependencies.

```bash

yarn add -D webpack-dev-server

```

6. update `package.json`'s script section

```javascript
"scripts": {
    "start": "webpack-dev-server --mode development",
    "build": "webpack --mode production"
  },
```

### Configure [HTML](https://www.w3schools.com/html/)

1. install `html-webpack-plugin`

```sh
yarn add html-webpack-plugin
or
npm i html-webpack-plugin -D

```

2. configure plugin inside `webpack.config.js`

```javascript
const HtmlWebpackPlugin = require("html-webpack-plugin");

plugins: [
  new HtmlWebpackPlugin({
    template: "./public/index.html",
    filename: "./index.html",
  }),
];
```

3. create `index.html`

```bash
    ...
    |-/
    | |-public
    | | |-index.html
    | |-...

```

### Configure [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) compilation using [Babel](https://babeljs.io/) in [webpack](https://webpack.js.org/)

1. install `@babel/core`, `babel-loader`, `@babel/preset-env` package.

```sh
yarn add babel-loader @babel/core @babel/preset-env
or
npm i babel-loader @babel/core @babel/preset-env
```

2. install `babel` devDependencies `@babel/cli` & `@babel/plugin-transform-runtime`

```sh
yarn add -D @babel/cli @babel/plugin-transform-runtime
or
npm i --save-dev @babel/cli @babel/plugin-transform-runtime
```

> @babel/plugin-transform-runtime re-use of Babel's injected helper in development

3. install `@babel/runtime` package

```sh
yarn add @babel/runtime
or
npm i @babel/runtime
```

> @babel/runtime re-use of Babel's injected helper/module in production

4. configure `babel-loader` in `webpack.config.js`

```javascript
module: {
  rules: [
    {
      // "test" identify which files & folders should be transformed
      test: /\.js$/,
      // "use" indicate which loaders should be used for transforming.
      use: {
        // if here only "babel-loader" you can load  options section from `.babelrc` file `presets
        loader: "babel-loader",
        /*options: {
            presets: [
              "@babel/preset-env",
              ["@babel/preset-react", { runtime: "automatic" }],
            ],
            plugins: ["@babel/plugin-transform-runtime"],
          },*/
      },
      exclude: /node_modules/,
    },
  ];
}
```

5. set `babel` presets & plugins in `.babelrc` file project root

```sh
touch .babelrc
```

```bash
    ...
    |-/
    | |-.babelrc
    |...

```

6. add `presets` & `plugins` to `.babelrc` file.

```javascript
{
  "presets": ["@babel/preset-env"],
  "plugins": ["@babel/plugin-transform-runtime"]
}

```

### Configure `React` & `React-DOM` [React](https://reactjs.org/)

1. install `react`, `react-dom` & `@babel/preset-react` to project

```sh
yarn add react react-dom @babel/preset-react
or
npm i react react-dom @babel/preset-react
```

2. update `.babelrc` file like

```javascript
{
  "presets": [
    "@babel/preset-env",
    ["@babel/preset-react", { "runtime": "automatic" }]
  ],
  "plugins": ["@babel/plugin-transform-runtime"]
}

```

### Configure [CSS-Style](https://www.w3schools.com/css/)

1. install **devDependencies** `css-loader`, `style-loader`, `sass-loader` & `node-sass` to project

```sh
yarn add -D css-loader style-loader sass-loader node-sass

or
npm i --save-dev css-loader style-loader sass-loader node-sass
```

2. configure installed package inside `webpack.config.js`

```javascript
{
  test: /\.(s[ac]|c)ss$/i,
  use: ["style-loader", "css-loader", "sass-loader"],
},
```

3. add `MiniCssExtractPlugin` plugin to extract css into separate file.

```sh
npm install --save-dev mini-css-extract-plugin
or
yarn add -D mini-css-extract-plugin

```

4. config `MiniCssExtractPlugin` plugin in `webpack.config.js`

```javascript
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
 plugins: [

    new MiniCssExtractPlugin({
      filename: "main.css",
      // chunkFilename:'main.css'
    }),
  ],
  module:{
    rules:[
        {
         test: /\.(s[ac]|c)ss$/i,
         use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
        },
    ]
  }

```

### Configure [TailwindCSS](https://tailwindcss.com/docs)

1. run those following command in terminal

```sh
yarn add -D postcss postcss-cli postcss-loader postcss-preset-env

touch postcss.config.js

yarn add -D tailwindcss

yarn add -D autoprefixer
```

2. add following code in your `postcss.config.js`

```javascript
const tailwindcss = require("tailwindcss");
const autoprefixer = require("autoprefixer");

module.exports = {
  presets: ["postcss-preset-env"],
  // plugins:[tailwindcss],
  plugins: [tailwindcss("./tailwind.config.js", autoprefixer)],
};
```

3. create `tailwind.config.js` file in project root

```sh
npx tailwind init
```

4. add those lines to `tailwind.config.js`

```javascript
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

5. add tailwind **directives** to `index.css` file

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

6. configure `webpack.config.js` file rules this order

```javascript
module: {
    rules: [
      {
        test: /\.(s[ac]|c)ss$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader", "sass-loader"],
      },
    ],
  },
```

### Configure Miscellaneous

1. config `asset` in `webpack.config.js`

```javascript
module: {
    rules: [
    {
      test:/\.(png|jpe?g|svg|gif)$/i,
        type:'asset',
        //custom output location in build...
        generator:{
          filename:"assets/[name][ext][query]"
        }
    },
   ],
  },
```

2. add `html-loader` & `copy-webpack-plugin` and configure in `webpack.config.js`

```javascript
**html-loader**
module: {
    rules: [

      {
        test:/.\html$/i,
        loader:"html-loader",

      }
    ],
  },
```

```javascript
**configure copy-webpack-plugin**
const CopyPlugin = require('copy-webpack-plugin');
 plugins: [
    new CopyPlugin({
      patterns:[{from:'./src/assets', to:'./assets'}]
    })
  ],
```
