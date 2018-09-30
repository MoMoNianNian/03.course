//1.引入ejs模块
var ejs = require("ejs");

//2. 创建一个模板
var str = "这是一个数组";

//3.模拟一个填充的数据
//数据必须是k-v的json对象，其中key在模板中被调用
var data = {names:['jack','rose','lily']};
var stus = {stus:[{name:"zs"},{name:"ls"},{name:"ww"}]};

//4.将数据填充到模板中
//返回值为一个完整的视图
var html = ejs.render(str,stus);

console.log(html);