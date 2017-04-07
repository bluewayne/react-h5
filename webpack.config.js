/**
 * Created by liujinhe on 2017/4/7.
 */

var http=require('http');
var path=require('path');

const contextRoot=path.resolve(__dirname);
const outputPath=path.join(__dirname,'build')

module.exports={
    root:contextRoot,
    entry:"./src/pages/noble_detail/index.js",
    output:{
        path: outputPath,
        filename:'[name].js',
    },
    devtool:'eval-source-map',
    module:{
        rules:[
            {
                test:/\.js$/,
                use:['babel-loader'],
                exclude:/(node_modules|bower_components)/
            }
        ]
    }


}