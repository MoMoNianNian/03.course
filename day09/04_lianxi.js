var http = require('http');
var fs = require('fs');//引入url模块
var server = http.createServer(function (req, res) {
  if (req.url == '/favicon.ico') {
    return;
  }
res.writeHead(200,{"content-Type":"text/html;charset=utf-8"});
 if(req.url=="/circle"){
   //读取圆形页面
   fs.readFile("./04_circle.html",function(err,data){

   if(err){
       //读取文件出错了
        res.end("读取文件出错！");
     }else{
       //读取文件成功
        res.end(data);
     }
   });
 }else if(req.url=="/square"){
    //读取圆形页面
    fs.readFile("./04_square.html",function(err,data){
     //4.编写服务器内容
   //如果要使用中文，需要选设置消息头
   
    if(err){
        //读取文件出错了
         res.end("读取出错！");
         return;
      }
        //读取文件成功
         res.end(data);
    
    });
}else{
   res.end("地址出错");
}
 
});
server.listen(4000, 'localhost');