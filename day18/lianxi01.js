var express = require("express");
var cookieParser = require('cookie-parser');
var app = express();
app.listen(4000);

app.set('view engine','ejs');
//设置cookie解析方式
app.use(cookieParser());

app.get('/',function(req,res){
  console.log(req.cookies);
  if(req.cookies.username){
    res.send("欢迎你，"+req.cookies.username);
  }else{
    res.render('welcome');
  }
  
})

app.get('/tijiao',function(req,res){
  var username=req.query.username;
  var password=req.query.password;
  if(username=="zhangsan"&&password==123){
    res.cookie('username',username,{maxAge:20000});
    res.send("欢迎你，"+username);
    
  }else{
    res.send('用户名或密码错误');
  }
  
  })

