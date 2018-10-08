var express = require('express');
var app = express();
//引入氮素提出来的方法 （引入路由文件）
var route = require('./03_route.js');
app.listen(4000);


//app.use('/',route.index);
//简写，只有'/'请求可以
//app.use(route.index);
app.get('/',route.index);

app.get('/info',route.info);

app.get('/error',route.error);