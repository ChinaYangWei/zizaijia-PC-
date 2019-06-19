const express=require("express");
const pool=require("../pool.js");
const router=express.Router();
router.get("/jiaju",(req,res)=>{
  pool.query("SELECT * FROM product_jiaju",(err,result)=>{
    if(err) throw err;
    res.send(result);
  })
})
router.get("/revise",(req)=>{
  var $is_newProduct=req.query.jiaju_newProduct;
  var $jiaju_id=req.query.jiaju_id;
  pool.query("UPDATE product_jiaju SET jiaju_newProduct=? WHERE jiaju_id=?",[$is_newProduct,$jiaju_id],(err)=>{
    if(err) throw err;
    return;
  })
})
module.exports=router;