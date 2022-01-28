# Configure _Webpack_ with React, TailwindCSS, TypeScript using `Webpack v5` [webpack.config.js]

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

- Create an `entry` point for app by -`Create a **src** folder and create an **index.js** file inside it.`

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
