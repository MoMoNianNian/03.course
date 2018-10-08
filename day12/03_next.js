var express = require('express');
var app = express();
app.listen(4000);

/* app.use(function(req,res,next){
   if(req.url == '/a'){
     // 当请求路径为/a时不处理，让后面的路由处理
     next();
   }else{
      res.send('get / 请求');
  }
});*/
//参数的传递与获取，与ng路由相似
//：后面的会当成参数的属性，获取是，通过req来获取
//带有参数时，请求路径不固定，尽量将精确匹配的路径写在上面，模糊匹配写在下面
// app.get('/a/123',function(req,res){
//   res.send('get /a 的学号是123');
// });
app.get('/a/:id',function(req,res){
  var id = req.params.id;
  res.send('get /a 请求:'+id);
});
// app.get('/student/:id',function(req,res){
//   res.send('学号是:'+req.params.id);
// });
//使用正则匹配
//匹配 /aaa/123 3个字母。3个数字的请求
app.get(/^\/[a-z]{3}\/[1-9]{3}$/,function(req,res){
  res.send('符合规范');
});