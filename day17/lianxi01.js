var express = require('express');
var app = express();
app.listen(4000);

//设置模板引擎
app.set('view engine','ejs');

app.get('/',function(req,res){
  res.render('show');
})

app.get('/upload',function(req,res){
var query=req.query;
if(query.username=="zhangsan"&&query.password==123){
  res.cookie('username',query.username,{maxAge:10000});
  res.send("登录成功");
  
}else{
  res.send('登录失败');
}

})