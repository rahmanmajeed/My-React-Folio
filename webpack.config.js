const path = require('path');

module.exports = {
    mode: 'development',
    devServer:{
        port : 8080
    },
    entry: {
        index: './src/index.js'
    },
    output:{
        filename:"main.js",
        path: path.resolve(__dirname,"dist"),
    }
}