// const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        index2: ['babel-polyfill', './src/controllers/index.js']
//      index3:  ['babel-polyfill', './src/js/dashboard.js'],
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
    })
    // new HtmlWebpackPlugin({
    //     filename: 'dashboard.html',
    //     template: './src/dashboard.html',
    //     chunks: ['index3']
    // }),
    // new HtmlWebpackPlugin({
    //     filename: 'mi-equipo.html',
    //     template: './src/mi-equipo.html',
    // }),
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
