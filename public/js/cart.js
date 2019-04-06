(function(){
  var clearCheck=$("clearCheck");
    var checks=document.querySelectorAll(".cart-info>.cart-count>input");
    var ischecked=true;
  clearCheck.onclick=function(){
    ischecked=!ischecked;
    let checked=ischecked;
    checked==false?clearCheck.innerHTML="全选":clearCheck.innerHTML="取消全选"
    for(var check of checks){
      check.checked=checked;
    }
  }
  var checks=document.querySelectorAll(".cart-info>.cart-count>input");
  for(var check of checks){
    check.onclick=function(){
      if(!check.checked){
        clearCheck.innerHTML="全选"
      }else{
        clearCheck.innerHTML="取消全选"
      }
    }
  }
  var dtCheck=document.querySelector("#deleteCheck");
  dtCheck.onclick=function(){
    var checks=document.querySelectorAll(".cart-info>.cart-count>input");
    for(var check of checks){
      if(check.checked==true){
        var alert=confirm("您确认要删除选中的商品吗？");
        if(alert){
          for(var check of checks){
            if(check.checked){
            check.parentNode.parentNode.removeChild(check.parentNode)
            }
          }
        }
      }else{
        confirm("您还未选中任何商品哦~");
      }
    }
  }
  var dtProducts=document.querySelectorAll(".cart-info .product-box tr>td:last-child");
  for(var dtProduct of dtProducts){
    dtProduct.onclick=function(){
    var dtProduct=this;
    var alert=confirm("您确认要删除该商品吗？");
      if(alert){
        dtProduct.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.removeChild(dtProduct.parentNode.parentNode.parentNode.parentNode.parentNode)
      }
    }
  }
})();