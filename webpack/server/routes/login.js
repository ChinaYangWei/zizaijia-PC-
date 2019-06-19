const express=require("express");
const pool=require("../pool.js");
const router=express.Router();
router.get("/login_phone",(req,res)=>{
  var $login_phone=req.query.user_phone;
if(!$login_phone){
  res.send("手机号不能为空");
  return;
  }
pool.query("SELECT * FROM store_user WHERE user_phone=?",[$login_phone],(err,result)=>{
  if(err) throw err;
if(result.length>0){
    res.send({"code":1});
  }else{
    res.send({"code":0});
  }
  });
});
router.get("/login_upwd",(req,res)=>{
  var $login_phone=req.query.user_phone;
  var $login_upwd=req.query.user_upwd;
if(!$login_phone){
  res.send("手机号不能为空");
  return;
  }
if(!$login_upwd){
  res.send("密码不能为空");
  return;
  }
pool.query("SELECT * FROM store_user WHERE user_phone=? and user_upwd=?",[$login_phone,$login_upwd],(err,result)=>{
  if(err) throw err;
if(result.length>0){
    res.send({"login_phone":result[0].user_phone,"login_upwd":result[0].user_upwd});
  }else{
    res.send("1");
  }
  });
});
module.exports=router;