var webpack = require('webpack');
var path = require('path');
var fileName='user'; //需要打包的文件名,省略后缀名
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry:'./js/'+fileName+'.js', //出口
  output:{filename: './js/'+fileName+'.js',}, //名字取当前引入的文件名
  // 指定对非js文件打包时使用的文件模块
  module:{
    rules:[
      {test:/\.css$/,use:["style-loader","css-loader"]},
      {test:/\.(jpg)|(png)|(gif)$/,use:["url-loader"]}
    ]
  },
  //插件
  plugins:[
    new HtmlWebpackPlugin({
      filename:'./pages/'+fileName+'.html',
      chunks:['./js/'+fileName], //创建成功后你的html要引入的js名字
      template:'./'+fileName+'.html' //请输入你要打包的html模板(也就是项目)
    })
  ]
}