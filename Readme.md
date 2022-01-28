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

- Create an `entry` point for app by -`Create a _src_ folder and create an _index.js_ file inside it.`

```bash
  ...
  |/
  |-src
  | |- index.js
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
