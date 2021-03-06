var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: __dirname + '/app/index.js',
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    },
    output: {
        filename: 'transformed.js',
        path: __dirname + '/build'
    },
    plugins: [
        new HtmlWebpackPlugin({
          template: __dirname + '/app/index.html',
          filename: 'index.html',
          inject: 'body'
        })
    ]
};