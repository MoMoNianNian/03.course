var route = require('./03_route');
var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
  if (req.url == '/favicon.ico') {
    return;
  }
  if(req.url=='/'){
    route.showIndex(req,res);
  }else if(req.url=='/info'){
    route.showInfo(req,res);
  }else{
    route.showError(req,res);
  }
}).listen(4000, 'localhost');