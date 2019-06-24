import {$,createXhr} from '../../js/util/common';
export default(function(){
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
      document.querySelector(".container>.center>.drop_down-right>ul>li>.cart>.cartNumber").style.display="none";
      document.querySelector(".center>.drop_down-right>ul>li:nth-child(3)>ul:nth-child(2)>.noCart").style.display="block"
      document.querySelector(".center>.drop_down-right>ul>li:nth-child(3)>ul:nth-child(2)>li").style.display="none"
    }else{
      document.querySelector(".center>.drop_down-right>ul>li:nth-child(3)>ul>.pr-number>span").style.display="block"
      document.querySelector(".container>.center>.drop_down-right>ul>li>.cart>.cartNumber").style.display="block";
      document.querySelector(".center>.drop_down-right>ul>li:nth-child(3)>ul:nth-child(2)>.noCart").style.display="none"
    }
    // 删除指定的商品之后再增加删除的那个商品的时候问题
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
    $("shopping").innerHTML+=cart;
    cartNum+='<span>总价:¥'+sum+'</span>'
    cartNum+='<div id="goSt">去结算</div>'
    document.querySelector(".center>.drop_down-right>ul>li:nth-child(3)>ul>li>.cartNum").innerHTML=cartNum
    var shopp=document.querySelectorAll(".drop_down-right>ul>li:nth-child(3) ul>li>div[id=shopping]>div");
    if(shopp.length>3){
      $("shopping").style='height:170px;overflow-x:hidden'
    }
  },500)
})();