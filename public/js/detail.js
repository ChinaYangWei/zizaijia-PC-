(function(){
var search=location.search.split("=")[1];
var xhr=createXhr();
xhr.onreadystatechange=function(){
  if(xhr.readyState==4&&xhr.status==200){
    var res=xhr.responseText;
    res=JSON.parse(res);
     document.querySelector(".goods>.product>.product-left h3>a").innerHTML=res[0].title_ify;
     document.querySelector(".goods>.product>.product-left>h3").innerHTML=res[0].title_ify+" "+res[0].jiaju_title;
     var a="";
     a+='<div class="font">'
     a+='<h3 class="detail-tit">'+res[0].jiaju_ln+'</h3>'
     a+='<div class="detail-raty">'
     a+='<div class="xingxing">'
     a+='<div class="start-before">★★★★★</div>'
     a+='<div class="end-before">★★★★★</div>'
     a+='</div>'
     a+='<div id="comment">评价:'
     a+='<span>0</span>'
     a+='</div>'
     a+='<div class="detail-fy">'
     a+='<a href="" class="fenxiang">'
     a+='</a>'
     a+='<a href="" class="shoucang">'
     a+='</a>'
     a+='</div>'
     a+='<div class="product-color-item">'
     if(res[0].jiaju_color.indexOf("#")!=-1){
      a+='<div class="item-color" style=background:'+res[0].jiaju_color+'>'
      a+='</div>'
     }else{
      a+='<span class="color-ln">'+res[0].jiaju_color+'</span>'
     }
     a+='<span class="color-title">颜色:</span>'
     a+='</div>'
     a+='<div class="product-color-spec">'
     a+='</div>'
     a+='<div class="product-count">'
     a+='<span class="productNumber">数量:</span>'
     a+='<button id="product-minus">-</button>'
     a+='<span id="product-number">1</span>'
     a+='<button id="product-add">+</button>'
     a+='</div>'
     a+='<div class="price-info">'
     if(res[0].jiaju_old.toFixed(2)>0.01){
      a+='<h3>￥'+res[0].jiaju_old.toFixed(2)+'</h3>'
      a+='<h4>￥'+res[0].jiaju_price.toFixed(2)+'</h4>'
    }else if(res[0].jiaju_old.toFixed(2)==0){
      a+='<h3>￥'+res[0].jiaju_price.toFixed(2)+'</h3>'
    }
     a+='<span class="pit">优惠提醒'
     a+='<div class="product-phone">'
     a+='<span>若商品在90日内享受促销优惠，我们将通过手机短信通知您。</span>'
     a+='<i class="icon"></i>'
     a+='<input type="text" placeholder="请输入手机号">'
     a+='<p>请输入手机号码</p>'
     a+='<div class="button-pit">优惠时通知我</div>'
     a+='</div>'
     a+='</span>'
     a+='</div>'
     a+='<div class="product-notice">'
    if(res[0].jiaju_newProduct==1){
      a+='<p>新品上市</p>'
    }
    if(res[0].jiaju_old>=0.01){
     a+='<p>优惠</p>'
    }
    if(res[0].jiaju_old>=0.01){
      a+='<p>超值</p>'
    }
     a+='<p>限时</p>'
     a+='</div>'
     a+='<a href="" id="adv_tag">新的起点重新起航</a>'
     a+='<div class="add_button">加入购物车</div>'
     a+='</div>'
     a+='</div>'
     document.querySelector(".product>.product-right>.right-container").innerHTML+=a;
      var add=$("product-add");
      var number=$("product-number");
      var minus=$("product-minus");
      add.onclick=function(){
        if(number.innerHTML>=res[0].jiaju_stock){
          alert("对不起，库存不足")
          return;
        }
        number.innerHTML++;
        var old=document.querySelector(".product>.product-right>.right-container>.font>.detail-raty>.product-count>#product-number").innerHTML;
        if(res[0].jiaju_old.toFixed(2)>=0.01){
          document.querySelector(".product>.product-right>.right-container>.font>.detail-raty>.price-info>h3").innerHTML="￥"+(old*res[0].jiaju_old).toFixed(2);
          document.querySelector(".product>.product-right>.right-container>.font>.detail-raty>.price-info>h4").innerHTML="￥"+(old*res[0].jiaju_price).toFixed(2);
        }else if(res[0].jiaju_old.toFixed(2)==0){
          document.querySelector(".product>.product-right>.right-container>.font>.detail-raty>.price-info>h3").innerHTML="￥"+(old*res[0].jiaju_price).toFixed(2);
        }
      }
      var input=document.querySelector(".product>.product-right>.right-container>.font>.detail-raty>.price-info>.pit>.product-phone>input");
      input.onblur=()=>{
        if(input.value==""){
          document.querySelector(".product>.product-right>.right-container>.font>.detail-raty>.price-info>.pit>.product-phone>p").style.display="block";
          document.querySelector(".product>.product-right>.right-container>.font>.detail-raty>.price-info>.pit>.product-phone>input").style="border-bottom:1px solid red";
        }else{
        document.querySelector(".product>.product-right>.right-container>.font>.detail-raty>.price-info>.pit>.product-phone>p").style.display="none";
        document.querySelector(".product>.product-right>.right-container>.font>.detail-raty>.price-info>.pit>.product-phone>input").style="border-bottom:1px solid #A9A9A9";
        }
      }
      minus.onclick=function(){
        if(number.innerHTML==1){
          return;
        }
        number.innerHTML--;
        var price=document.querySelector(".product>.product-right>.right-container>.font>.detail-raty>.product-count>#product-number").innerHTML;
        if(res[0].jiaju_old.toFixed(2)>=0.01){
          document.querySelector(".product>.product-right>.right-container>.font>.detail-raty>.price-info>h3").innerHTML="￥"+(price*res[0].jiaju_old).toFixed(2);
          document.querySelector(".product>.product-right>.right-container>.font>.detail-raty>.price-info>h4").innerHTML="￥"+(price*res[0].jiaju_price).toFixed(2);
        }else if(res[0].jiaju_old.toFixed(2)==0){
          document.querySelector(".product>.product-right>.right-container>.font>.detail-raty>.price-info>h3").innerHTML="￥"+(price*res[0].jiaju_price).toFixed(2);
        }
      }
     document.querySelector(".product>.product-right>.right-container>.font>.detail-raty>.xingxing>.end-before").style.width=res[0].jiaju_score.toFixed(2)+"%";


     var addCart=document.querySelector(".product>.product-right>.right-container>.font>.detail-raty>.add_button");
     var number=document.querySelector(".product>.product-right>.right-container>.font>.detail-raty>.product-count>#product-number");
     var cart="";
     addCart.onclick=function(){
      document.querySelector(".drop_down-right>ul>li:nth-child(3)>ul:nth-child(2)>.noCart").style.display="none";
      document.querySelector(".drop_down-right>ul>li:nth-child(3) ul>.pr-number").style.display="block";
      if(document.cookie.indexOf(search)!=-1){
        document.querySelector(".drop_down-right>ul>li:nth-child(3)>ul>li>#shopping>div>p>.number").innerHTML;
      }else{
      document.cookie=res[0].jiaju_id;
      cart+='<div id="shopping">'
      cart+='<div>'
      cart+=  '<img src="'+res[0].jiaju_img+'" align="left">'
      cart+=  '<p>'+res[0].jiaju_ln+'</p>'
      if(res[0].jiaju_old.toFixed(2)>=0.01){
        cart+=  '<p>价格:￥'+res[0].jiaju_old.toFixed(2)+'</p>'
      }else if(res[0].jiaju_old.toFixed(2)==0){
        cart+=  '<p>价格:￥'+res[0].jiaju_price.toFixed(2)+'</p>'
      }
      cart+=  '<p>数量:<span class="number">'+number.innerHTML+'</span></p>'
      cart+=  '</div>'
      cart+='</div>'
      var cartNum=document.querySelector(".drop_down-right>ul>li:nth-child(3)>ul:nth-child(2)>.cartNum");
      var shopp=document.querySelectorAll(".drop_down-right>ul>li:nth-child(3) ul>#cart>div[id=shopping]")
      if(res[0].jiaju_old.toFixed(2)>=0.01){
        cartNum.innerHTML='<span>￥总价:'+(res[0].jiaju_old.toFixed(2)*(shopp.length+1)).toFixed(2)+'</span>'
      }else if(res[0].jiaju_old.toFixed(2)==0){
        cartNum.innerHTML='<span>￥总价:'+(res[0].jiaju_price.toFixed(2)*(shopp.length+1)).toFixed(2)+'</span>'
      }
      cartNum.innerHTML+='<div onclick="onCart">去结算</div></div>'
      if(shopp.length>3){
        $("cart").style="height:280px;overflow-x:hidden";
      }
      document.querySelector(".drop_down-right>ul>li:nth-child(3) ul>#cart").innerHTML+=cart;
      cart="";
      document.querySelector(".drop_down-right>ul>li:nth-child(3) ul>.pr-number").innerHTML=shopp.length+1+"件商品"
      }
    }
  }
}
xhr.open("get","http://127.0.0.1:3000/detail/shopping?jiaju_id="+search,true);
xhr.send(null);

 var detail=createXhr();
 detail.onreadystatechange=function(){
   if(detail.readyState==4&&detail.status==200){
     var response=detail.responseText;
     response=JSON.parse(response);
     var html="";
     //因为第一次加载页面右边放大镜图片中没有img的图片资源，所以默认加载数据库第一张图片资源
     var img=response[0].img_big;
      document.querySelector("#addpic>.focus").onmouseover=function(){
        $("picbox").style.display="block";
      }
      document.querySelector("#addpic>.focus").onmouseout=function(){
        $("picbox").style.display="none";
      }
     document.querySelector("#picbox>img").src=img;
     for(var i=0;i<response.length;i++){
       html+='<a href="" data-id=img'+i+' class="shop_item'+(i==0?' active"':'"')+'data-toggle="hover" >'
       html+='<img src="'+response[i].img_sm+'"></a>'
       img+='<img src="'+response[i].img_big+'" id="img'+i+'" style="display:'+(i==0?"block":"none")+'">'
     }
    document.querySelector("#addpic>.focus>.data-img").innerHTML+=img;
    document.querySelector(".footer_img>.shop_img").innerHTML+=html;
    var as=document.querySelectorAll("[data-toggle=hover]");
    for(var a of as){
      a.onmouseover=function(){
        for(var a of as){
        a.className=a.className.replace("active","");
        }
        var a=this;
        if(a.className.indexOf("active")==-1){
          a.className+=" active";
        }
        var id=a.getAttribute("data-id");
        var img=document.getElementById(id);
        var imgs=document.querySelectorAll("[id^=img]");
        for(var item of imgs){
          if(img!=item){
            item.style.display="none";
          }
        }
        img.style.display="block";
        document.querySelector("#picbox>img").src=img.src;
      }
    }
  }
}
 detail.open("get","http://127.0.0.1:3000/detail/product_img?productImgId="+search,true);
 detail.send(null);
})()

var small=document.getElementById('addpic');
var inner=document.getElementById('tool');
var big=document.getElementById('picbox');
var img=big.getElementsByTagName('img')[0];
//当鼠标移入small的时候，inner和big显示
small.onmouseover=function(){
  big.style.display='block';
  inner.style.display='block';
};
//当鼠标在small移动的时候：1）鼠标在inner的中间 2）inner跟随鼠标移动
small.onmousemove=function(e){
  e=e||window.event;
  var left=e.clientX-this.offsetLeft-inner.offsetWidth/2;
  var top=e.clientY-this.offsetTop-inner.offsetHeight/2;
  if(left<=0){
    left=0;
  }else if(left>=this.offsetWidth-inner.offsetWidth){
    left=this.offsetWidth-inner.offsetWidth
  }
  if(top<=0){
    top=0;
  }else if(top>=this.offsetHeight-inner.offsetHeight){
    top=this.offsetHeight-inner.offsetHeight
  }
  inner.style.left= left+'px';
  inner.style.top= top+'px';
  //当inner移动的时候，大图跟着一起移动，并且，大图和inner移动的方向相反；
  //或者理解为：左边阴影在图片上从左到右移动的时候，右边大框也在大图片上从左到右移动（尽管视觉上是相反的）。
  img.style.left=left/(small.offsetWidth-inner.offsetWidth)*(big.offsetWidth-img.offsetWidth)+'px';
  img.style.top=top/(small.offsetHeight-inner.offsetHeight)*(big.offsetHeight-img.offsetHeight)+'px';
};
//当鼠标移出的时候，inner和big隐藏；
small.onmouseout=function(){
  big.style.display='none';
  inner.style.display="none";
}
// 商品的规格模板
// a+='<span class="spec-tlt">规格:</span>'
// a+='<div class="spec">'
// a+='<a id="gry">1.5米</a>'
// a+='</div>'