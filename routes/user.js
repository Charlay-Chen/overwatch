const express=require('express');
const pool=require('../pool.js');
var router=express.Router();

router.post("/login",(req,res)=>{
  console.log(req.body);
  var $email=req.body.email;
  var $upwd=req.body.upwd;
  console.log($email);
  if (!$email) {
    res.send("用户名为空！");
    return ;
  }
  if (!$upwd) {
    res.send("密码为空！");
    return ;
  }
  var sql="select * from ow_user where email=? and upwd=?"
  pool.query(sql,[$email,$upwd],(err,result)=>{
    if (err) throw err;
    if (result.length>0) {
      res.send("登陆成功！");
    }else {
      res.send("用户名或密码错误");
    }
  });
});
//注册接口
router.get('/regedit',function(req,res){
  var userreg=req.query;
  pool.query('INSERT INTO ow_user SET ?',[userreg],function(err,result){
    if (err) throw err;
    if (result.affectedRows>0)
    {
      res.send('1');
    }
    else{
      res.send('0');
    }
  })
});




//导出路由器
module.exports=router;
