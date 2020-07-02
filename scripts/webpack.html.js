const path = require('path');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const commonPack = require('./webpack.common');

module.exports = merge(commonPack, {
    entry: path.resolve(__dirname, '../local/1.tsx'),
    output: {
        path: path.resolve(__dirname, '../dev'),
        filename: '1.js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: path.resolve(__dirname, '../dev/1.html'),
            template: path.resolve(__dirname, '../local/1.html'),
        }),
    ],
    devServer: {
        host: '0.0.0.0',
        port: process.env.PORT || 5500,
        open: true,
        openPage: '1.html',
        contentBase: path.resolve(__dirname, '../dev'),
    },
});
