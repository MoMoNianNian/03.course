var express = require("express");
var cookieParser = require('cookie-parser');
var session = require('express-session');
var app = express();
app.listen(4000);
app.set('view engine','ejs');
app.use(session({
  secret:'keyboard cat',
  //通过字符串获取一个hash值，用于生成一个sessionID
  resave:false,
  //resave：是否强制自动保存，即使数据在请求期间没有被修改
  saveUninitialized:true,
  //强制保存未初始化的session
  cookie:{maxAge:365*24*60*60*1000}
}));

app.get('/',function(req,res){
  if(req.session.username){
    //找到了登录信息
    res.send("欢迎你，"+req.session.username+'<a href="/logout">退出登录</a>');
  }else{
    res.render('welcome');
  }
  
})

app.get('/tijiao',function(req,res){
  //获取用户名
  var username=req.query.username;
  var password=req.query.password;
  //判断用户名与密码是否争取
  if(username=="zhangsan"&&password==123){
    req.session.username = username;
    res.send("欢迎你，"+username+'<a href="/logout">退出登录</a>');
    
  }else{
    res.send('用户名或密码错误');
  }
  
  })

  //退出登录 处理/logout请求
  app.get('/logout',function(req,res){
    //删除session
    req.session.destroy(function(err){
      if(err){
        res.send('退出失败');
      }else{
        res.send('退出成功'); 
      }
    })
  })

