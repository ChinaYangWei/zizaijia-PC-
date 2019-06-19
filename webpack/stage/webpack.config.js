// 导入glob模块用于查找某一文件夹下的指定结尾的文件
// 如果所有文件没有依赖关系
// 可以用glob查找文件夹下指定结尾的文件进行全部打包
// glob.sync(文件夹/*.结尾格式)
const glob=require("glob")
// 导出对象
module.exports={
  entry:'./js/login.js',
  output:{
    path:__dirname+"/dist",
    filename:"user.js",
  },
  // 指定对非js文件打包时使用的文件模块
  module:{
    rules:[
      {test:/\.css$/,use:["style-loader","css-loader"]},
      {test:/\.(jpg)|(png)|(gif)$/,use:["url-loader"]}
    ]
  }
}