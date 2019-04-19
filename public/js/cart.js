(function(){
  // 全选与反选
  var clearCheck=$("clearCheck");
  var ischecked=true;
  clearCheck.onclick=function(){
    var checks=document.querySelectorAll(".cart-info>.cart-count>input");
    ischecked=!ischecked;
    let checked=ischecked;
    checked==false?clearCheck.innerHTML="全选":clearCheck.innerHTML="取消全选"
    for(var check of checks){
      check.checked=checked;
    }
  }
  // 单选
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
  // 删除商品
  var dtCheck=$("deleteCheck");
  dtCheck.onclick=function(){
    var checks=document.querySelectorAll(".cart-info>.cart-count>input");
    for(var check=1;check<checks.length;check++){
      var length=checks.length;
      if(check==length){
        if(checks[check].checked==true){
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
  }
})();