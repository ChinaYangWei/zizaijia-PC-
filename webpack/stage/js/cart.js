import {$,createXhr} from './util/common'
import './util/nav';
import './util/blCart';
import './util/footer';
import '../css/base.css';
import '../css/cart.css';
(function(){
  var cartInfo=document.querySelector(".cart-info");
  var cartDetail="";
  var cartCount="";
  var price=0;
  function getStorage(){
    var arr=[];
    var cart="";
    var cartNum="";
    if(localStorage.length>=1){
      for(var i=0;i<localStorage.length;i++){
        var getKey=localStorage.key(i);
        var getVal=localStorage.getItem(getKey)
        if(getVal!=null){
          arr[i]=JSON.parse(getVal)
        }
      }
    }
    setTimeout(function(){
      if(localStorage.length==0){
        document.querySelector(".Nav>.container>.center>.drop_down-right>ul>li>.cart>.cartNumber").style.display="none";
        document.querySelector(".center>.drop_down-right>ul>li:nth-child(3)>ul:nth-child(2)>.noCart").style.display="block"
        document.querySelector(".center>.drop_down-right>ul>li:nth-child(3)>ul:nth-child(2)>li").style.display="none"
      }else{
        document.querySelector(".center>.drop_down-right>ul>li:nth-child(3)>ul>.pr-number>span").style.display="block"
        document.querySelector(".Nav>.container>.center>.drop_down-right>ul>li>.cart>.cartNumber").style.display="block";
        document.querySelector(".center>.drop_down-right>ul>li:nth-child(3)>ul:nth-child(2)>.noCart").style.display="none"
      }
      // 删除指定的商品之后再增加删除的那个商品的时候问题
      // 购物车点击删除为0的时候也要删除购物车内容
      var nb=0;
      var sum=0;
      var old_price=0;
      var new_price=0;
      for(var i=0;i<arr.length;i++){
        nb+=arr[i].productNb;
        sum+=arr[i].new_price;
        cart+='<div>'
        cart+='<img src="'+arr[i].imgUrl+'" align="left">'
        cart+='<p>'+arr[i].productLn+'</p>'
        cart+='<p>价格:￥'+arr[i].new_price
        if(arr[i].old_price>0.01){
          cart+='<span style="text-decoration:line-through;color:#555;margin-left:10px;">￥31996.00</span>'
        }
        cart+='</p>'
        cart+='<p>数量:<span class="number">'+arr[i].productNb+'</span></p>'
        cart+='</div>'
        //打折商品 
        if(arr[i].new_price!=undefined&&arr[i].old_price!=undefined){
          new_price+=JSON.parse(arr[i].new_price);
        //未打折商品 
        }else if(arr[i].new_price!=undefined&&arr[i].old_price==undefined){
          old_price+=JSON.parse(arr[i].new_price);
        }
      }
      if(old_price>=1&&new_price>=1){
        sum=(parseFloat(new_price)+parseFloat(old_price)).toFixed(2);
      }else if(new_price>=1&&old_price<=0){
        sum=(parseFloat(new_price)).toFixed(2);
      }else{
        sum=(parseFloat(old_price)).toFixed(2);
      }
      document.querySelector(".center>.drop_down-right>ul>li:nth-child(3)>ul>.pr-number>span").innerHTML=arr.length+"件商品";
      document.querySelector(".Nav>.container>.center>.drop_down-right>ul>li>.cart>.cartNumber").innerHTML=nb;
      $("shopping").innerHTML=cart;
      cartNum+='<span>总价:¥'+sum+'</span>'
      cartNum+='<div id="goSt">去结算</div>'
      document.querySelector(".center>.drop_down-right>ul>li:nth-child(3)>ul>li>.cartNum").innerHTML=cartNum
      var shopp=document.querySelectorAll(".drop_down-right>ul>li:nth-child(3) ul>li>div[id=shopping]>div");
      if(shopp.length>3){
        $("shopping").style='height:170px;overflow-x:hidden'
      }else if(shopp.length==0){
        document.querySelector(".center>.drop_down-right>ul>li:nth-child(3)>ul>.pr-number>span").style.display="none";
      }
    },500)
  }
  // 第一步
    var arr=[];
    if(localStorage.length>=1){
      document.querySelector(".cart-balance>.cart-noProduct").style.display="none"
      document.querySelector(".cart-balance>.cart-haveProduct").style.display="block"
      for(var i=0;i<localStorage.length;i++){
        var getKey=localStorage.key(i);
        var getVal=localStorage.getItem(getKey)
        if(getVal!=null){
          arr[i]=JSON.parse(getVal)
        }
        // 订单生成
        cartDetail+='<div class="cart-count">'
        cartDetail+='<input type="checkbox" checked>'
        cartDetail+='<div class="product-box">'
        cartDetail+='<table class="'+getKey+'">'
        cartDetail+='<tbody>'
        cartDetail+='<tr>'
        cartDetail+='<td style="width:14%">'
        cartDetail+='<a href=""><img src='+arr[i].imgUrl+'></a>'
        cartDetail+='</td>'
        cartDetail+='<td style="width:10%">'
        cartDetail+='<p>'
        cartDetail+='<a href="">'+arr[i].productLn+'</a>'
        cartDetail+='</p>'
        cartDetail+='<p class="cmCode">商品编码：Z26BD11</p>'
        cartDetail+='</td>'
        cartDetail+='<td style="width:25%">'
        if(arr[i].new_price!=undefined&&arr[i].old_price!=undefined){
          cartDetail+='<span class="new_price">¥'+arr[i].new_price+'</span>'
          cartDetail+='<span class="old_price">¥'+arr[i].old_price+'</span>'
        }else{
          cartDetail+='<span class="new_price">¥'+(arr[i].new_price/arr[i].productNb).toFixed(2)+'</span>'
        }
        cartDetail+='</td>'
        cartDetail+='<td style="width:20%">'
        cartDetail+='<span>数量:</span>'
        cartDetail+='<select>'
        cartDetail+='<option value="'+arr[i].productNb+'">'+arr[i].productNb+'</option>'
        cartDetail+='</select>'
        cartDetail+='</td>'
        cartDetail+='<td style="width:12%">'
        cartDetail+='<span>¥'+arr[i].new_price+'</span>'
        cartDetail+='</td>'
        cartDetail+='<td style="width:5%">'
        cartDetail+='<img id="deleteProduct" src="http://127.0.0.1:3000/images/shanchu.png" alt="">'
        cartDetail+='</td>'
        cartDetail+='</tr>'
        cartDetail+='</tbody>'
        cartDetail+='</table>'
        cartDetail+='</div>'
        cartDetail+='</div>'
      }
      cartInfo.innerHTML+=cartDetail;
      cartDetail="";
    }
  // 第二步
  function Detail(){
    var checks=document.querySelectorAll(".cart-info>.cart-count>input");
    price=0;
    for(var i=0;i<checks.length;i++){
      if(checks[i].checked){
        var pr=checks[i].nextElementSibling.firstChild.firstChild.firstChild.childNodes[4].firstChild;
        price+=JSON.parse(pr.innerHTML.split("¥")[1])
      }
    }
    var checked=document.querySelectorAll(".cart-info>.cart-count>input:checked");
    // 价格计算
    cartCount+='<div class="order-div">'
    cartCount+='<h2>订单概览</h2>'
    cartCount+='<p class="product-count">'+checked.length+'件商品</p>'
    cartCount+='<div class="summary-info">'
    cartCount+='<p>'
    cartCount+='<span>商品小计</span>'
    cartCount+='<span>¥'+price.toFixed(2)+'</span>'
    cartCount+='</p>'
    cartCount+='<p>'
    cartCount+='<span>优惠</span>'
    cartCount+='<span>¥0.00</span>'
    cartCount+='</p>'
    cartCount+='</div>'
    cartCount+='<p class="order-price">'
    cartCount+='<span>应付金额</span>'
    cartCount+='<span>¥'+price.toFixed(2)+'</span>'
    cartCount+='</p>'
    cartCount+='<div class="button">结算</div>'
    cartCount+='</div>'
    var cartDetail=document.querySelector(".cart-order");
    cartDetail.innerHTML=cartCount;
    cartCount="";
    price=0;
  }
  Detail();
  // 全选与反选
  var clearCheck=$("clearCheck");
  clearCheck.onclick=function(){
    if(clearCheck.className=="false"){
      for(var i=0;i<checks.length;i++){
        checks[i].checked=true;
        clearCheck.className="true";
        clearCheck.innerHTML="取消全选";
      }
    }else{
      for(var i=0;i<checks.length;i++){
        checks[i].checked=false;
        clearCheck.className="false";
        clearCheck.innerHTML="全选";
      }
    }
    Detail();
  }
    // 单选
  var checks=document.querySelectorAll(".cart-info>.cart-count>input");
  for(var i=0;i<checks.length;i++){
    checks[i].onclick=function(){
      Detail();
      var counts=document.querySelectorAll(".cart-info>.cart-count");
      var checks=document.querySelectorAll(".cart-info>.cart-count>input:checked");
      if(checks.length==counts.length){
        clearCheck.className="true";
        clearCheck.innerHTML="取消全选"
      }else{
        clearCheck.className="false";
        clearCheck.innerHTML="全选"
      }
    }
  }
    // 选择性删除商品
  var dtCheck=$("deleteCheck");
  dtCheck.onclick=function(){
    var checkn=document.querySelectorAll(".cart-info>.cart-count>input:not(:checked)");
    var checkc=document.querySelectorAll(".cart-info>.cart-count>input:checked");
    if(checkc.length==0){
      alert("您未选中商品哦！")
    }else if(checkn.length>=0){
      var con=confirm("您确认删除选中的商品吗？")
      if(con){
        for(var i=0;i<checkc.length;i++){
          localStorage.removeItem(checkc[i].nextElementSibling.childNodes[0].className)
          checkc[i].parentNode.parentNode.removeChild(checkc[i].parentNode);
          Detail();
          getStorage();
          if(localStorage.length==0){
            document.querySelector(".cart-noProduct").style.display="block"
            document.querySelector(".cart-haveProduct").style.display="none"
          }
        }
      }
    }
  }
    // 单项性删除商品
  var clearProduct=document.querySelectorAll("#deleteProduct");
  for(let i=0;i<clearProduct.length;i++){
    clearProduct[i].onclick=function(e){
      if(confirm("确认删除该商品吗?")){
        localStorage.removeItem(e.target.parentNode.parentNode.parentNode.parentNode.className)
        clearProduct[i].parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.removeChild(clearProduct[i].parentNode.parentNode.parentNode.parentNode.parentNode.parentNode);
        Detail();
        getStorage();
        if(localStorage.length==0){
          document.querySelector(".cart-noProduct").style.display="block"
          document.querySelector(".cart-haveProduct").style.display="none"
        }
      }
    }
  }
})();