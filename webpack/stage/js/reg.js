import {$,createXhr} from './util/common'
(function(){
  function textFail(id,value){
  document.querySelector(id).innerHTML=value;
}
function textColor_fail(id){
  document.querySelector(id).style="border-bottom:1px solid red";
}
function textColor_success(textId,value){
  document.querySelector(textId).style="border-bottom:1px solid #7adfa9";
  document.querySelector(value).innerHTML="";
}
/* 创建一个变量是手机号验证的*/
var msg=/^[1][3,4,5,7,8][0-9]{9}$/;
// 创建一个变量是验证码验证的
var esg=/^[0-9a-zA-Z]{4}$/;

// 手机号判断
var regPhone=document.querySelector("#reg_phone");
var regP=false;
regPhone.onblur=()=>{
 var reg_phone=regPhone.value;
  if(reg_phone==""){
    textFail("#showPhone","手机号不能为空");
    textColor_fail("#reg_phone");
    regP=false;
  }else if(reg_phone.length==11&&msg.test(reg_phone)){
    textColor_success("#reg_phone","#zhPhone");
    regP=true;
  }else{
    textFail("#showPhone","手机号格式错误");
    textColor_fail("#reg_phone");
    regP=false;
  }
  if(regP){
    var xhr=createXhr();
    xhr.onreadystatechange=function(){
      if(xhr.readyState==4&&xhr.status==200){
        var result=xhr.responseText;
        var res=JSON.parse(result);
        if(res.code==0){
          textColor_success("#reg_phone","#showPhone");
          loginP=true;
        }else{
          textFail("#showPhone","该手机号已经被注册啦");
          textColor_fail("#reg_phone");
          regP=false;
        }
      }
    }
    xhr.open("get","http://127.0.0.1:3000/reg/reg_phone?user_phone="+reg_phone,true);
    xhr.send(null);
  }
}

// 输入密码判断
var regCpwd=document.querySelector("#reg_cpwd");
var regC=false;
regCpwd.onblur=function(){
  var reg_cpwd=regCpwd.value;
  var reg_upwd=regUpwd.value;
  if(reg_cpwd==""){
    textFail("#showCpwd","请输入密码");
    textColor_fail("#reg_cpwd");
    regC=false;
  }else if(!/^\w{5,20}$/.test(reg_cpwd)){
    textFail("#showCpwd","密码必须由6-20位大小写字母,数字或下划线组成");
    textColor_fail("#reg_cpwd");
    regC=false;
  }else if(reg_upwd!=""&&reg_cpwd!=reg_upwd){
    textFail("#showCpwd","请输入一致密码");
    textColor_fail("#reg_upwd");
    textColor_fail("#reg_cpwd");
    regC=false;
    regU=false;
  }else if(reg_cpwd==reg_upwd){
    textColor_success("#reg_cpwd","#showCpwd");
    textColor_success("#reg_upwd","#showUpwd");
    regC=true;
    regU=true;
  }
}

// 确认密码判断
var regU=false;
var regUpwd=document.querySelector("#reg_upwd");
regUpwd.onblur=function(){
  var reg_upwd=regUpwd.value;
  var reg_cpwd=regCpwd.value;
  if(reg_upwd==""){
    textFail("#showUpwd","请输入确认密码");
    textColor_fail("#reg_upwd");
  }else if(!/^\w{5,20}$/.test(reg_upwd)){
    textColor_fail("#reg_upwd");
    regU=false;
  }else if(reg_cpwd!=""&&reg_upwd!=reg_cpwd){
    textFail("#showUpwd","密码不一致");
    textColor_fail("#reg_upwd");
    textColor_fail("#reg_cpwd");
    regC=false;
    regU=false;
  }else if(reg_upwd==reg_cpwd){
    textColor_success("#reg_cpwd","#showCpwd");
    textColor_success("#reg_upwd","#showUpwd");
    regC=true;
    regU=true;
  }
}

// 图形验证码判断
var regY=false;
var regYzm=document.querySelector("#reg_yzm");
regYzm.onblur=function(){
var reg_yzm=regYzm.value;
  if(reg_yzm==""){
    textFail("#showYzm","请输入验证码");
    textColor_fail("#reg_yzm");
    regY=false;
  }else if(esg.test(reg_yzm)&&reg_yzm.length==4){
    textColor_success("#reg_yzm","#showYzm");
    regY=true;
  }else{
    textFail("#showYzm","验证码错误");
    textColor_fail("#reg_yzm");
    regY=false;
  }
}

// 验证码判断
var regY2=false;
var regYzm2=document.querySelector("#reg_yzm2");
regYzm2.onblur=function(){
var reg_yzm2=regYzm2.value;
  if(reg_yzm2==""){
    textFail("#showYzm2","请输入验证码");
    textColor_fail("#reg_yzm2");
    regY2=false;
  }else if(esg.test(reg_yzm2)&&reg_yzm2.length==4){
    textColor_success("#reg_yzm2","#showYzm2");
    regY2=true;
  }else{
    textFail("#showYzm2","验证码错误");
    textColor_fail("#reg_yzm2");
    regY2=false;
  }
}


// 注册按钮
var reg=document.querySelector("#REG");
reg.onclick=function(){
// checked的判断
var check=document.querySelector(".reg_top>#reg>.protocol>input:first-child");
  if(check.checked==true){
    document.querySelector(".reg_top>div:first-child").className="checked"
    if(regP==true&&regU==true&&regC==true&&regY==true&&regY2==true){
    var xhr=createXhr();
    xhr.onreadystatechange=function(){
      if(xhr.readyState==4&&xhr.status==200){
        var result=xhr.responseText;
        var res=JSON.parse(result);
        if(res.code==1){
          alert("注册成功");
          location.href="http://127.0.0.1:3000/reg.html";
        }
      }
    }
    xhr.open("post","http://127.0.0.1:3000/reg/Reg",true);
    xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    var formData="user_phone="+regPhone.value+"&user_upwd="+regUpwd.value;
    xhr.send(formData);
    }else{
    alert("请认真填写注册信息");
    }
  }else{
    document.querySelector(".reg_top>.checked").className="not-checked"
  }
}
})();