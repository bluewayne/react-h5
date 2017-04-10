/**
 * Created by liujinhe on 2017/4/7.
 */

var http = require('http');
var path = require('path');
var webpack=require('webpack');
const UglifyJSPlugin=require('uglifyjs-webpack-plugin');

const contextRoot = path.resolve(__dirname);
const outputPath = path.join(__dirname, 'build')

module.exports = {
    context: contextRoot,
    entry: ["./src/pages/noble_details/index.js"],
    output: {
        filename: '[name].js',
        path: outputPath,
        publicPath: "/assets/"
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
        new UglifyJSPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        })
    ]

}