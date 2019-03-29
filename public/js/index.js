(function (){window.onload = function(){
  //获取元素
  var list =document.getElementById('imgList');
  var img=document.querySelectorAll("#imgList>img");
  var buttons = document.getElementById('buttons').getElementsByTagName('span');
  var pre = document.getElementById('pre');
  var next = document.getElementById('next');
  var index = 1;//默认第一个小圆点亮
  //console.log(buttons)
  buttons=Array.prototype.slice.call(buttons);
  // 打印
  //console.log(buttons)
  // 判断是否为数组
  //console.log(Array.isArray(buttons));
  buttons.forEach((el,i) => {
    el.onmouseover=function(e){
      var button=e.target;
      if(button.className!='active'){
        for(var j = 0;j < buttons.length; j++){
          buttons[j].className = '';
        }
        button.className="active";
        index=i;
        list.style.left=-(i+1)*1903+"px";
      }
      
    }
  })
  //小圆点的点亮
  function showButton() {
    //遍历小圆点的个数，当触发onclick事件后，className为‘active’的变为‘’。
    for(var i = 0;i < buttons.length; i++){
      if(buttons[i].className == 'active'){
        buttons[i].className = '';
          break;
        }
      }
    buttons[index-1].className = 'active'; //原始第一个小圆点点亮，onclick事件触发后，index+1
  }
  function animate (offset) {
    //获取从第一张图片开始发生的偏移量
    var newLift = parseInt(list.style.left) + offset;
      list.style.left = newLift + 'px';
    if(newLift > -1903){
      //如果偏移量的位置大于-1903的时候，图片跳转到第五张图片
      list.style.left = -5709 + 'px';
    }
    if(newLift < -5709){
      //如果偏移量的位置大于-5709的时候，图片跳转到第一张图片
      list.style.left = -1903 + 'px';
      }
    }
  next.onclick = function () {
  //如果button的index为3的时候，再点击next按钮会返回 1；
    if(index == 3){
      index = 1;
    }else{
      index += 1;
    }
      showButton();
      animate(-1903);
    }
  pre.onclick = function () {
    if(index == 1){
      index = 3;
    }else{
      index -= 1;
    }
      showButton();
      animate(1903);
  }
}
// 最后的一个功能
var as=document.querySelectorAll("#tab>[data-toggle=tab]");
for(var a of as){
  a.onclick=function(){
    var a=this;
    as.forEach(el=>{
      el.className=el.className.replace("active","");
    })
    a.className+=" active";
    var id=a.getAttribute("data-id");
    // 查找当前绑定data-id的元素
    //console.log(id);
    var ul=document.querySelector(id);
    var uls=document.querySelectorAll(".tab-container>ul");
    uls.forEach(el=>{
      el.style.display="none";
    })
    ul.style.display="block";
  }
}
})()