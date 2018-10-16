var express = require("express");
var cookieParser = require('cookie-parser');
var session = require('express-session');
var app = express();
app.listen(4000);
 
app.use(session({
  secret:'keyboard cat',
  //通过字符串获取一个hash值，用于生成一个sessionID
  resave:false,
  //resave：是否强制自动保存，即使数据在请求期间没有被修改
  saveUninitialized:true,
  //强制保存未初始化的session
  cookie:{maxAge:60000}
}));



//处理 /search请求，每一次都将用户的结果全部显示在页面上
app.get('/search',function(req,res){
// 获取搜索的参数
  var name = req.query.name;
  //获取session中保存的history
  var history = req.session.history || [];
  
  //判断输入的参数是不是undefined或者是空字符串
  //如果是，就不作操作，如果不是就将其添加到历史数组中
  if(!(name==undefined||name.trim()=='')){
    /** 
     * 先判断历史记录中是否已经保存了本次搜索的记录
    */
    history.push(name);
  }
  //将history保存进session
  req.session.history = history;
  //讲历史记录显示在页面上
  res.send(history);
});