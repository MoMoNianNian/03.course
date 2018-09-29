//引用a.js文件
var a=require('./02_a.js');

console.log("module中调用a.js的属性"+a.attr);
console.log("module中调用a.js的属性:");
a.func();