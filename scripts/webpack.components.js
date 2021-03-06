const path = require('path');
const merge = require('webpack-merge');
const fs = require('fs');
const commonPack = require('./webpack.common');

const componentsRoot = path.resolve(__dirname, '../components');

const components = fs.readdirSync(componentsRoot).reduce((res, fileName) => {
    res[fileName] = `${componentsRoot}/${fileName}`;
    return res;
}, {});

module.exports = merge(commonPack, {
    entry: components,
    output: {
        path: path.resolve(__dirname, '../plugins'),
        filename: '[name].js',
        library: '[name]', // 挂在在window上
        libraryTarget: 'umd',
        globalObject: 'this',
    },
});
