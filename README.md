# zizaijia
恣在家(PC)项目
1.模仿 http://www.zeststore.com 项目官网</br>
2.纯js原生技术实现整个页面的交互与数据展示</br>
3.请浏览和start的禁止上线</br>
4.否则一系列法律问题，本人不做相应的承担</br>
使用:</br>
1.node.js下载，下载xmapp集成软件，启动mysql和Apache服务器</br>
问题:</br>
1.报3306错误怎么办？查看任务管理器(Ctrl+Alt+Del)-服务-PID查看端口占用情况。如果有请查看并且查看是否为无用程序，否则可以暂停</br>
2.数据如何用mysql导入？mysql的数据格式为(.sql)请查看我滞留的(.sql)文件在xmapp集成服务器软件点击mysql的右边的Admin进行网页化集成管理mysql和导入</br>
3.mysql的3306端口修改不了怎么办？打开xmapp的config配置文件中搜索port更改xmapp默认的端口</br>
2.模块和所需文件</br>
mysql模块(基于mysql数据库的增删改查)</br>
express模块(设置get，post数据)</br>
body-parser模块(基于express的一种解析前端传值的服务模块)</br>
cors(解决前端到后端传值过程中的跨域请求报错处理)</br>
webpack(模块化打包工具)</br>
npm(javascript包管理工具)，npm是node.js自带的第三方模块的命令所以不需要下载哦</br>
最后:在servser的文件夹中shift+鼠标右键启动cmd命令窗口然后输入 "node app.js"</br>
！！！注意，请先把xmapp的服务器相关的全部start然后检查mysql数据库中有没有zizaijia这个数据库哦！！！</br>
