const express=require("express");
const pool=require("../pool.js");
const router=express.Router();
router.get("/shopping",(req,res)=>{
  var $jiaju_id=req.query.jiaju_id;
  pool.query("SELECT * FROM product_jiaju WHERE jiaju_id=?",$jiaju_id,(err,result)=>{
    if(err) throw err;
    res.send(result);
  })
})
router.get("/product_img",(req,res)=>{
  var $productImgId=req.query.productImgId;
  pool.query("SELECT * FROM productimgurl WHERE productImgId=?",$productImgId,(err,result)=>{
    if(err) throw err;
    res.send(result);
  })
})
module.exports=router;