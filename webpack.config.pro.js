/**
 * Created by liujinhe on 2017/4/7.
 */

var http = require('http');
var path = require('path');
var webpack=require('webpack');
const UglifyJSPlugin=require('uglifyjs-webpack-plugin');

const contextRoot = path.resolve(__dirname);
const outputPath = path.join(__dirname, 'build')
const entryConfig=require('./src/entry.config.js');

module.exports = {
    context: contextRoot,
    entry: entryConfig,
    output: {
        filename: '[name].js',
        path: outputPath
    },
    devtool: 'eval-source-map',
    module: {
        rules: [
            {
                test: /\.js$/,
                use: ['babel-loader'],
                exclude: /(node_modules|bower_components)/
            }
        ]
    },
    plugins: [
        new UglifyJSPlugin({
            beautify: false,
            // 删除所有的注释
            comments: false,
            compress: {
                // 在UglifyJs删除没有用到的代码时不输出警告
                warnings: false,
                // 删除所有的 `console` 语句
                // 还可以兼容ie浏览器
                drop_console: true,
                // 内嵌定义了但是只用到一次的变量
                collapse_vars: true,
                // 提取出出现多次但是没有定义成变量去引用的静态值
                reduce_vars: true,
            }

        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        })
    ],
    externals:{
        'react': 'React',
        'react-dom': 'ReactDOM'
    }

}