(function(){
var head=document.querySelector("head");
var footer=document.createElement("LINK");
footer.rel="stylesheet";
footer.href="./css/footer.css";
head.appendChild(footer)
var xhr=createXhr();
xhr.onreadystatechange=function(){
  if(xhr.readyState==4&&xhr.status==200){
    var res=xhr.responseText;
    document.querySelector(".footer").innerHTML=res;
    // dom操作
    var img=document.querySelectorAll(".footer-top>a>img");
    img[0].onmouseover=function(){
      img[0].src="http://127.0.0.1:3000/images/footer_bg1-1.jpg";
    }
    img[0].onmouseout=function(){
      img[0].src="http://127.0.0.1:3000/images/footer_bg1.jpg";
    }
    img[1].onmouseover=function(){
      img[1].src="http://127.0.0.1:3000/images/footer_bg2-1.jpg";
    }
    img[1].onmouseout=function(){
      img[1].src="http://127.0.0.1:3000/images/footer_bg2.jpg";
    }
    img[2].onmouseover=function(){
      img[2].src="http://127.0.0.1:3000/images/footer_bg3-1.jpg";
    }
    img[2].onmouseout=function(){
      img[2].src="http://127.0.0.1:3000/images/footer_bg3.jpg";
    }
  }
}
xhr.open("get","../common/footer.html",true);
xhr.send(null);
})();