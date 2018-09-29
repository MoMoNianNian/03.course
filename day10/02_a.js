require("./02_b")
console.log("这是a.js的内容");
var a = 12;
function b(){
  console.log("这是a.js的方法b");
}
//exports.暴露的名称 = 定义的名称;
//暴露的名称是给外部文件使用
//定义的名称是内部自己定义的变量名或方法
exports.attr = a;
exports.func = b;