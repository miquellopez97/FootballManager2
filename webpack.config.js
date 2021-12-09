// const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        index2: ['babel-polyfill', './src/controllers/index.js'],
        index3:  ['babel-polyfill', './src/controllers/show-data.js'],
        index4:  ['babel-polyfill', './src/controllers/my-team.js'],
    },
    output: {
    filename: './js/[name].bundle.js'
    },
    watch: true,
    plugins: [
    new HtmlWebpackPlugin({
        filename: 'index.html',
        template: './src/views/index.html',
        chunks: ['index2']
    }),
    new HtmlWebpackPlugin({
        filename: 'show-data.html',
        template: './src/views/show-data.html',
        chunks: ['index3']
    }),
    new HtmlWebpackPlugin({
        filename: 'my-team.html',
        template: './src/views/my-team.html',
        chunks: ['index4']
    }),
    ],
    devServer: {
    static: './dist',
    },
    module: {
    rules: [
        {
        test: /.js$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
        },
        },
    ],
    },
};
