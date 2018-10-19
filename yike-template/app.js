var express = require('express');
var request = require('request');
var fd = require('formidable');
var sd = require('silly-datetime');
var app = express();

app.listen(4000);

app.set('view engine','ejs');
app.use(express.static('./public'));
app.use(express.static('./scripts'));

app.get('/',function(req,res){
  res.render('index');
})

//处理angular路由发送的 /index 请求
app.get('/index',function(req,res){
  res.render('list');//返回页面视图给路由
})


//处理控制器index使用$http发送的请求 /getIndexData
app.get('/getIndexData',function(req,res){
  var date = sd.format(new Date(),'YYYY-MM-DD');
  //使用request模块向豆瓣一刻服务器获取数据
   var url ='https://moment.douban.com/api/stream/date/'+date+'?alt=json&apikey=0bcf52793711959c236df76ba534c0d4&app_version=1.7.4&douban_udid=d623045db9fcb0d5243174c1bf1a675f887047c0&format=full&udid=9a34d8b038ff38971050199b0c5ee9c60c6d1ca3&version=6' ;
  request(url,function(err,response,body){
    if(err){
      console.log(err);
      //返回错误信息，为了区别错误信息与正确信息，将返回的数据简单封装一下，statu值为NO，表示错误信息，值为OK表示正确信息，方便控制器区分返回的信息是否正常
      res.send({status:'NO',data:'请求豆瓣一刻的数据出错'});
      return;
    }
    //没有出错，将得到的数据(body)原封不动的返回给控制器
    res.send({status:'OK',data:body});
     })
})

//处理angular路由发送的 /older请求
app.get('/older',function(req,res){
  res.render('older');//返回页面视图给路由
})

app.get('/getOlderData',function(req,res){

  var date = req.query.date;
  var t = sd.format(date,'YYYY-MM-DD');
  console.log(t);
  //使用request模块向豆瓣一刻服务器获取数据
   var url ='https://moment.douban.com/api/stream/date/'+t+'?alt=json&apikey=0bcf52793711959c236df76ba534c0d4&app_version=1.7.4&douban_udid=d623045db9fcb0d5243174c1bf1a675f887047c0&format=full&udid=9a34d8b038ff38971050199b0c5ee9c60c6d1ca3&version=6' ;
  request(url,function(err,response,body){
    if(err){
      console.log(err);
      res.send({status:'NO',data:'请求豆瓣一刻的数据出错'});
      return;
    }
    res.send({status:'OK',data:body});
     })
})

app.get('/author',function(req,res){
  var url= 'https://moment.douban.com/api/auth_authors/rec?alt=json&apikey=0bcf52793711959c236df76ba534c0d4&app_version=1.7.4&count=20&douban_udid=d623045db9fcb0d5243174c1bf1a675f887047c0&start=0&udid=9a34d8b038ff38971050199b0c5ee9c60c6d1ca3&version=6';
  request(url,function(err,response,body){
    if(err){
      console.log(err);
      res.render('test',{data:'请求作者的数据出错'});
      return;
    }
    res.render('author',{data:JSON.parse(body).authors});
     })
  
});