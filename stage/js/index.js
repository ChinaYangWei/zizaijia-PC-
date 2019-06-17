(function (){
  var div = document.querySelector(".banner")
  var img = div.getElementsByTagName('img'); /*选中div下所有的图片*/
  var ul = document.getElementsByTagName('ul')[0];
  var li = ul.getElementsByTagName('li');
  var prev= document.getElementsByTagName('div')[1].getElementsByTagName('div')[1];
  var next = document.getElementsByTagName('div')[1].getElementsByTagName('div')[0];
  var len = img.length;
  var count = 0; /*设置count来显示当前图片的序号*/
function run(){ /*将定时器里的函数提取到外部*/
    count++;
    count = count==len?0:count; /*当图片加载到最后一张时，使其归零*/
  for(var i=0;i<len;i++){
    img[i].style.display = 'none'; /*利用for循环使除当前count位其他图片隐藏*/
  }
    img[count].style.display = 'block'; /*显示当前count的值所代表的图片*/
  for(var i=0;i<li.length;i++){
    li[i].style.backgroundColor = "#fff"; /*原理同上*/
  }
    li[count].style.backgroundColor = "rgb(43, 255, 0)";
}
var timer = setInterval(run,3500); /*定义定时器，使图片每隔3.5s更换一次*/
div.onmouseover = function(){
  clearInterval(timer);
  prev.style.display="block";
  next.style.display="block";
}
div.onmouseleave = function(){ /*定义鼠标移出事件，当鼠标移出div区域，轮播继续*/
  timer = setInterval(run,3500);
  prev.style.display="none";
  next.style.display="none";
}
for(var i=0;i<len;i++){
  li[i].index = i; /*定义index记录当前鼠标在li的位置*/
  li[i].onmouseenter = function(){ /*定义鼠标经过事件*/
  for(var i=0;i<len;i++){ /*通过for循环将所有图片隐藏，圆点背景设为白色*/
    li[i].style.background = '#fff';
    img[i].style.display = 'none';
  }
    this.style.background = 'rgb(43, 255, 0)'; /*设置当前所指圆点的背景色*/
    img[this.index].style.display = 'block'; /*使圆点对应的图片显示*/
  }
}
prev.onclick = function(){ /*因为span没有设置宽高，直接把事件添加到他的父级*/
  run(); /*直接调用现成的run函数*/
}
function reverse(){
    count--;
    count = count==-1?2:count;
  for(var i=0;i<len;i++){
    img[i].style.display = 'none'; /*利用for循环使除当前count位其他图片隐藏*/
  }
    img[count].style.display = 'block'; /*显示当前count的值所代表的图片*/
  for(var i=0;i<li.length;i++){
    li[i].style.backgroundColor = "#fff"; /*原理同上*/
  }
    li[count].style.backgroundColor = "rgb(43, 255, 0)";
}
next.onclick = function(){
  reverse(); /*重新设置函数*/
}


//1. 查找触发事件的元素
var tab=document.querySelectorAll(
  "#tab>[data-toggle=tab]"
);
//2. 绑定事件处理函数
(function(){
for(var li of tab){
  li.onclick=function(){
    var li=this;
    // span切换
    var spans=document.querySelectorAll("#tab>span");
    for(var span of spans){
      span.className="tab_item";
    }
      li.className+=" active";
    // 底部的ul图片
    var id=li.getAttribute("data-id");
    var ul=document.querySelector(id);
    var uls=document.querySelectorAll(".tab-container>ul");
    for(var d of uls){
      d.style.display="none";
    }
      ul.style.display="block";
  }
}
})();
})();