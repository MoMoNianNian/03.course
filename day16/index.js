var express = require('express');
var sd = require('silly-datetime');//时间戳
var bdParser = require('body-parser');
var fd = require('formidable');//主要用于文件上传
var mongoClient = require('mongodb').MongoClient;
var db = require('../day15/db/db.js');
var app = express();
app.listen(4000);

app.set('view engine','ejs');
//设置请求解析方式
app.use(bdParser.urlencoded({extended:true}));



app.get('/',function(req,res){
  db.findAll("message",function(err,docs){
    if(err){
      console.log(err);
    }else{
      res.render('tijiao',{msg:docs});
      console.log(docs);
    }
  })
});


app.post('/tijiao',function(req,res){
var time=sd.format(new Date(),"YYYY-MM-DD HH:mm:ss");
var data ={username:req.body.username,message:req.body.message,time:time};
db.add("message",data,function(err,result){
  if(err){
        console.log(err);
        res.send('注册失败');
      }else{
        res.redirect('/');
      }
      
});

})








