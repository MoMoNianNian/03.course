var express = require('express');
//2.创建app应用对象
var app = express();
//3.监听端口
app.listen(4000);

//设置视图模板引擎
//默认引擎是jade,不习惯
app.set("view engine","ejs");

//展示03.ejs视图模板的内容

//处理具体的请求-
app.get('/',function(req,res){
  res.send('这是首页');
});

app.get('/info',function(req,res){
  //模拟的数据
  var data={stus:['jack','rose','mike','jerry']};
  //将数据发送给视图
   res.render('04',data);
});