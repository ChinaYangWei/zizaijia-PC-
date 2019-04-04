(function (){
var span=document.querySelectorAll("#click");
for(var spans of span){
  spans.onclick=function(){
    var span=this;
    var classify=span.nextElementSibling.style;
    if(classify.display==true||span.innerHTML=="-"){
      span.innerHTML="+";
      classify.display="none"; 
    }else{
      span.innerHTML="-";
      classify.display="block";
    }
  }
}
var orderList=document.querySelector(".orderList");
var orderListSelect=$("orderListSelect");
orderList.onclick=function(){
  if(orderListSelect.style.display=="block"){
    orderListSelect.style="display:none";
  }else{
  orderListSelect.style="transition:all 2s linear 3s;display:block;"
  }
}
// 商品的循环
var xhr=createXhr();
xhr.onreadystatechange=function(){
  if(xhr.readyState==4&&xhr.status==200){
    var res=xhr.responseText;
    var jiaju=JSON.parse(res);
    var html="";
    $("product_nb").innerHTML="家具("+jiaju.length+")"
    for(var i=0;i<jiaju.length;i++){
      //判断是否为新品
      if(jiaju[i].jiaju_newProduct==1){
        // 获得数据库的时间
        var sql_date=new Date(jiaju[i].jiaju_newTime);
        sql_date=Date.parse(sql_date)
        // 获得当前时间
        var new_date=new Date();
        new_date=Date.parse(new_date)
        // 拿当前时间减去数据库存入时间，得到毫秒数，再获得差值的天数，判断是否大于30天
        if(parseInt((new_date-sql_date)/(1000*60*60*24))>30){
          console.log(parseInt((new_date-sql_date)/(1000*60*60*24)))
          var jiaju_id=jiaju[i].jiaju_id;
          var revise=createXhr();
          revise.onreadystatechange=function(){
          }
          revise.open("get","http://127.0.0.1:3000/product/revise?jiaju_id="+jiaju_id+"&jiaju_newProduct=0");
          revise.send(null);
        }
      }
      if(jiaju[i].jiaju_old==0){
        html+='<li>'
        html+='<div class="img"><img src="http://127.0.0.1:3000/images/dz.png" alt=""></div>'
        html+='<a href="http://127.0.0.1:3000/detail.html?jiaju_id='+jiaju[i].jiaju_id+'">'
        html+='<img src="'+jiaju[i].jiaju_img+'" alt="" class="product-img">'
      if(jiaju[i].jiaju_newProduct==1){
        html+='<img src="http://127.0.0.1:3000/images/xptg.jpg" style="display:block" alt="" class="new-product">'
      }else if(jiaju[i].jiaju_newProduct==0){
        html+='<img src="http://127.0.0.1:3000/images/xptg.jpg" alt="" class="new-product">'
      }
        html+='<div class="price-pt">'
        html+='<p class="product-pt-title">'+jiaju[i].title_ify+'</p>'
        html+='<p class="product-pt-ln">'+jiaju[i].title_ify+" "+jiaju[i].jiaju_title+'</p></div>'
        html+='<p class="price">'
        html+='<span class="old">'+"￥"+jiaju[i].jiaju_price.toFixed(2)+'</span></p></a></li>'
      }else if(jiaju[i].jiaju_old>=0.01||jiaju[i].jiaju_newProduct==0){
        html+='<li><div class="img"><img src="http://127.0.0.1:3000/images/dz.png" alt=""></div>'
        html+='<a href="http://127.0.0.1:3000/detail.html?jiaju_id='+jiaju[i].jiaju_id+'">'
        html+='<img src="'+jiaju[i].jiaju_img+'" alt="" class="product-img">'
      if(jiaju[i].jiaju_newProduct==1){
        html+='<img src="http://127.0.0.1:3000/images/xptg.jpg" style="display:block" alt="" class="new-product">'
      }else if(jiaju[i].jiaju_newProduct==0){
        html+='<img src="http://127.0.0.1:3000/images/xptg.jpg" alt="" class="new-product">'
      }
        html+='<div class="price-dz" style="display:block;">'
        html+='<p class="product-dz-title">'+jiaju[i].title_ify+" "+jiaju[i].jiaju_title+'</p>'
        html+='<p class="product-dz-ln">'
        html+='<span class="dz-price">到手价</span>'
        html+='<span class="dz-old">'+"￥"+jiaju[i].jiaju_old.toFixed(2)+'</span>'
        html+='<span class="discount">'+"￥"+jiaju[i].jiaju_price.toFixed(2)+'</span></p>'
        html+='</div>'
        html+='<p class="price">'
        html+='<span class="old">'+"￥"+jiaju[i].jiaju_old.toFixed(2)+'</span></p>'
     }
    }
    $("jiaju").innerHTML+=html;
  }
}
xhr.open("get","http://127.0.0.1:3000/product/jiaju",true);
xhr.send(null);
})()