const express=require("express");
const pool=require("../pool.js");
const router=express.Router();
router.get("/reg_phone",(req,res)=>{
  var $reg_phone=req.query.user_phone;
if(!$reg_phone){
  res.send("手机号不能为空");
  return;
}
pool.query("SELECT * FROM store_user WHERE user_phone=?",[$reg_phone],(err,result)=>{
   if(err) throw err;
if(result.length>0){
   res.send({"code":"1"});
   }else{
   res.send({"code":"0"});
   }
});
});
router.get("/reg_upwd",(req,res)=>{
  var $user_upwd=req.query.user_upwd;
if(!$user_upwd){
 res.send("密码不能为空");
 return;
 }
pool.query('SELECT * FROM store_user WHERE user_upwd="?"',[$user_upwd],(err,result)=>{
  if(err) throw err;
if(result.length>0){
  res.send({"code":"1"});
  }else{
  res.send({"code":"0"});
  }
});
});
router.post("/Reg",(req,res)=>{
  var $reg_phone=req.body.user_phone;
  var $reg_upwd=req.body.user_upwd;
if(!$reg_phone){
  res.send("手机号不能为空");
  return;
}
if(!$reg_upwd){
  res.send("密码不能为空");
  return;
}
pool.query("INSERT INTO store_user VALUES('NULL',?,?)",[$reg_phone,$reg_upwd],(err,result)=>{
  if(err) throw err;
if(result.affectedRows>0){
   res.send({"code":"1"});
  }else{
   res.send({"code":"0"});
  }
});
});
module.exports=router;