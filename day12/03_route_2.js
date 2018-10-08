var express = require('express');
//引入自己封装的路由模块
var route = require('./03_route_2_ext.js');
var route1 = require('./03_route_2_teacher.js');
var app = express();
app.listen(4000);

app.get('/',function(req,res){
  res.send("这是app的/请求");
} );

app.use('/student',route);//已经处理了 /student/ 请求 
app.use('/teacher',route1);
//app.use('/teacher');