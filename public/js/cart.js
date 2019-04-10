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
// 未解决的问题:
// 全选问题
// 保存的时候循环product1,2,3商品得到id判断是否跟页面id一致
// 待解决的问题:
// 商品的消费以及总价计算问题
// 结算商品物品时判断用户是否登录问题
// 导航栏scroll移动问题