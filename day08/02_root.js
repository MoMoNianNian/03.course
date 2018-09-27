//1.引入http模块
var http = require("http");
//引入fs模块
var fs = require("fs");
//2.通过http创建服务器
var server = http.createServer(function(req,res){
  
  /*
  因为NodeJs没有根目录，所以无法通过
  localhost:400/02_root.html来访问该文件的内容
  可以使用fs模块来实现这个功能
  */
 // 使用fs来读取02_root.html的内容，并将读取到的数据作为响应内容，返回给页面
 fs.readFile("./02_root.html",function(err,data){
  //4.编写服务器内容
//如果要使用中文，需要选设置消息头
res.writeHead(200,{"content-Type":"text/html;charset=utf-8"});
 if(err){
     //读取文件出错了
     console.log(err);//打印错误信息
      res.end("读取文件出错！");
   }else{
     //读取文件成功
     console.log(data.toString());//打印错误信息
      res.end(data);
   }
 })

});
//3.开启服务，监听端口
server.listen(4000,"localhost");