var http=require("http");

var server = http.createServer(function(req,res){
  //console.log(req);
  if(req.url == "/favicon.ico"){
    //如果请求是/favicon.ico，直接返回，不处理
    return;
  }
  console.log(req.url);
  /*
  req.url可以获取请求路径与参数，不能获取锚点
  获取到的值是一个url格式的字符串
  */ 
  //res.end()结束请求，不需要想页面发送任何数据
  //主要用于测试
  res.end();
});

server.listen(4000,"127.0.0.1")