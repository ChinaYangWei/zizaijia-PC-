const express=require("express");
const pool=require("../pool.js");
const router=express.Router();
router.get("/notice",(req,res)=>{
  pool.query("SELECT * FROM notice",(err,result)=>{
    if(err) throw err;
    res.send(result);
  });
})
module.exports=router;