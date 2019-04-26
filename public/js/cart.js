(function(){
  // 循环本地商品
  var cartInfo=document.querySelector(".cart-info");
  var cartDetail="";
  var cartCount="";
  var price=0;
  function Detail(){
    // 价格计算
    var checks=document.querySelectorAll(".cart-info>.cart-count>input:checked")
    cartCount+='<div class="order-div">'
    cartCount+='<h2>订单概览</h2>'
    cartCount+='<p class="product-count">'+checks.length+'件商品</p>'
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
  var arr=[];
  if(localStorage.length>=1){
    document.querySelector(".cart-noProduct").style.display="none"
    document.querySelector(".cart-haveProduct").style.display="block"
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
        cartDetail+='<span class="new_price">¥'+arr[i].new_price+'</span>'
      }
      cartDetail+='</td>'
      cartDetail+='<td style="width:20%">'
      cartDetail+='<span>数量:</span>'
      cartDetail+='<select>'
      cartDetail+='<option value="'+arr[i].productNb+'">'+arr[i].productNb+'</option>'
      cartDetail+='</select>'
      cartDetail+='</td>'
      cartDetail+='<td style="width:12%">'
      cartDetail+='<span>¥'+(arr[i].new_price/arr[i].productNb).toFixed(2)+'</span>'
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
    var checks=document.querySelectorAll(".cart-info>.cart-count>input");
    for(var i=0;i<checks.length;i++){
      if(checks[i].checked){
        var pr=checks[i].nextElementSibling.firstChild.firstChild.firstChild.childNodes[2].firstChild;
        price+=JSON.parse(pr.innerHTML.split("¥")[1])
      }
    }
    Detail();
  }
  // 全选与反选
  var clearCheck=$("clearCheck");
  clearCheck.onclick=function(){
    var checks=document.querySelectorAll(".cart-info>.cart-count>input");
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
      var checks=document.querySelectorAll(".cart-info>.cart-count>input:checked");
      for(var i=0;i<checks.length;i++){
        if(checks[i].checked){
          var pr=checks[i].nextElementSibling.firstChild.firstChild.firstChild.childNodes[2].firstChild;
          price+=JSON.parse(pr.innerHTML.split("¥")[1])
        }
      }
      Detail();
      var counts=document.querySelectorAll(".cart-info>.cart-count");
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
    var checks=document.querySelectorAll(".cart-info>.cart-count>input");
    for(let i=0;i<checks.length;i++){
      if(i==checks.length-1){
        if(checks[i].checked==true){
          var con=confirm("您确认要删除选中的商品吗?");
          if(con){
            if(spLength.length==0&&localStorage.length==0){
              document.querySelector(".cart-noProduct").style.display="block"
              document.querySelector(".cart-haveProduct").style.display="none"
            }
            for(let check of checks){
              if(check.checked){
                check.parentNode.parentNode.removeChild(check.parentNode);
              }
            }
          }
        }else{
          alert("您还未选中任何商品哦~");
        }
      }
    }
  }
    // 单项性删除商品
  var clearProduct=document.querySelectorAll("#deleteProduct");
  for(let i=0;i<clearProduct.length;i++){
    clearProduct[i].onclick=function(){
      if(confirm("确认删除该商品吗?")){
        if(spLength.length==0&&localStorage.length==0){
          document.querySelector(".cart-noProduct").style.display="block"
          document.querySelector(".cart-haveProduct").style.display="none"
        }
        localStorage.removeItem(document.querySelector(".product-box>table").className);
        clearProduct[i].parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.removeChild(clearProduct[i].parentNode.parentNode.parentNode.parentNode.parentNode.parentNode);
      }
    }
  }
  // 问题:购物车删除商品，返回商品添加删除的商品的时候会冲突
  // 其它页面获取购物车
})();