// const dev = process.env.MODE == 'development' ? true : false;
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const dev = process.env.MODE === 'development';

module.exports = {
    mode: process.env.MODE,
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.css', '.less'],
        alias: {
            '@components': path.resolve(__dirname, '../components'),
        },
    },

    module: {
        rules: [
            {
                test: /\.(less|css)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader', 'less-loader',
                ],
            },
            {
                test: /\.(tsx|js|ts)?$/,
                loader: 'ts-loader',
                options: {
                    transpileOnly: true,
                },
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 20000,
                        },
                    },
                ],
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css',
        }),
        new UglifyJsPlugin({
            sourceMap: false,
            uglifyOptions: {
                safari10: true,
                warnings: false, // 删除无用代码时不输出警告
                compress: {
                    drop_console: true, // 删除所有console语句，可以兼容IE
                    collapse_vars: true, // 内嵌已定义但只使用一次的变量
                    reduce_vars: false, // 提取使用多次但没定义的静态值到变量
                },
                output: {
                    beautify: false, // 最紧凑的输出，不保留空格和制表符
                    comments: false, // 删除所有注释
                },
            },
            include: /\.(js|ts)$/,
        }),
    ],
};
