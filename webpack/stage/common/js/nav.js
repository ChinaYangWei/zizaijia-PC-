import '../css/nav.css'
import {$,createXhr} from '../../js/util/common';
import '../../js/util/blCart';
//  ajax请求导航栏页面
export default(function(){
var xhr=createXhr();
xhr.onreadystatechange=function(){
  if(xhr.readyState==4&&xhr.status==200){
    var res=xhr.responseText;
    document.querySelector(".Nav").innerHTML=res;
    var search=document.querySelector(".search");
    var button=document.querySelector(".drop_down-right>ul>li:first-child>a");
    var focus=document.querySelector(".search>.searchText>.input>input");
    button.onclick=function(){
      search.style="display:block;top:-30px";
      focus.focus();
      document.querySelector("#fade").style.display="block";
    focus.onblur=function(){
      document.querySelector(".search>.searchText>div:nth-child(2)").style.display="none";
      search.style.height="300px";
      }
    focus.onfocus=function(){
      document.querySelector(".search>.searchText>div:nth-child(2)").style.display="block";
      search.style.height="390px";
    }
    }
    // 搜索框
    var img=document.querySelector(".search>div>img:first-child");
    img.onclick=function(){
      search.style="display:none";
      document.querySelector("#fade").style.display="none";
    }  
      // 获取导航栏的高度，并且动态获取bg的高度，更改导航栏的margintop
      var container=document.querySelector(".container");
      var ntHeight=document.querySelector(".notice").offsetHeight;
      window.onscroll=function(){
        var top=document.documentElement.scrollTop;
        if(top>=ntHeight){
          container.style.position="fixed";
          var notice=document.querySelector(".notice");
          notice.style.display="none";
        }else{
          container.style.position="staic";
          var notice=document.querySelector(".notice");
          notice.style.display="block";
        }
        // 底部的左右选拉的时候改变fixed的元素left使得向右或者向左移动
        var x=document.documentElement.scrollLeft;
        var nav=document.querySelector(".container")
        if(x>=1){
          nav.style.left=-x+"px";
        }else{
          nav.style.left=x+"px";
        }
      }
  var notice=createXhr();
  notice.onreadystatechange=function(){
    if(notice.readyState==4&&notice.status==200){
      var r=notice.responseText;
       var no=JSON.parse(r);
      var html="";
      for(var i=0;i<no.length;i++){
        html+="<li>";
        html+='<a href="">'+no[i].notice+'</a>'
        html+="</li>"
      }
      $("noticeText-left").innerHTML=html;
      html="";
    }
  }
    notice.open("get","http://127.0.0.1:3000/notice/notice",true);
    notice.send(null);
    // 公告li循环缓慢显示播放
    setTimeout(function(){
      var li=document.querySelector(".notice>div:first-child>#noticeText-left>li");
      var lis=document.querySelectorAll(".notice>div:first-child>#noticeText-left>li");
      // 判断公告是否大于一条，小于则不轮播
      if(lis.length>1){
        var isNumber=0, isNotice=false;
        setInterval(()=>{
          if(isNumber==(lis.length*li.offsetHeight-li.offsetHeight)){
            isNotice=true;
          }if(isNumber==0){
            isNotice=false;
          }if(isNotice){
            li.style="transition:all 2s linear";
            isNumber-=li.offsetHeight;
            li.style.marginTop=(-isNumber)+"px";
          }else{
            li.style="transition:all 2s linear";
            isNumber+=li.offsetHeight;
            li.style.marginTop=(-isNumber)+"px";
          }
        },5930)
      }
    },70)
  }
}
  xhr.open("get","http://127.0.0.1:3000/common/nav.html",true);
  xhr.send(null);
})();
