const express=require("express");
const bodyParser=require("body-parser");
const reg=require("./routes/reg.js");
const login=require("./routes/login.js");
const notice=require("./routes/notice.js");
const product=require("./routes/product.js");
const detail=require("./routes/detail.js");
const cors=require("cors");
var app=express();
app.listen(3000);
app.use(bodyParser.urlencoded({
  extended:false
}));
app.use(cors({
  orgin:"http://127.0.0.1:5500"
}))
app.use(express.static("../public"));
app.use("/reg",reg);
app.use("/login",login);
app.use("/notice",notice);
app.use("/product",product);
app.use("/detail",detail);