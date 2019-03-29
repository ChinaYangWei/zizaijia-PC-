function $(id){
var ele=document.getElementById(id);
return ele;
}
//创建一个函数保存并且用ajax判断用户的浏览器是否支持ajax互异
function createXhr(){
	var xhr=null;
if(window.XMLHttpRequest){
  var xhr=new XMLHttpRequest();
}else{
  var xhr=new ActiveXObject("Microsoft.XMLHttp");
}
return xhr;
}