/**
 * Created by liujinhe on 2017/4/7.
 */

const http = require('http');
const path = require('path');
var webpack=require('webpack');

const contextRoot = path.resolve(__dirname);
const outputPath = path.join(__dirname, 'build')

const entryConfig=require('./src/entry.config.js');

module.exports = {
    context: contextRoot,
    entry: entryConfig,
    output: {
        filename: '[name].bundle.js',
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

    externals:{
        'react': 'React',
        'react-dom': 'ReactDOM'
    }

}