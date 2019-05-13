const express=require("express");
const router=express.Router();
const pool=require("../pool");

router.get("/",(req,res)=>{
  var sql="select * from ow_index_hero order by hid";
  pool.query(sql,[],(err,result)=>{
    if(err) console.log(err);
    res.send(result);
    console.log(result);
  })
})

module.exports=router;