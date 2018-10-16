var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var config = {
    entry: ['babel-polyfill', './app/index.js'],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index_bundle.js',
        publicPath: '/'
    },
    module: {
        rules: [
            {test: /\.(js)$/, exclude: /(node_modules)/, use: 'babel-loader'},
            {test: /\.(css)$/, use: ['style-loader', 'css-loader']}
        ]
    },
    mode:'development',  
    plugins: [
        new HtmlWebpackPlugin({
            template: 'app/index.html'
        })
    ]
};

module.exports = config;