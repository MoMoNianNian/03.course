var db = require('./db.js');

//删除数据
var filter ={id:111};

db.del("stu",filter,function(err,result){
  console.log(err);
  console.log(result);
});

// //修改数据
// var filter ={id:102};
// var data ={age:88};
// db.modify("stu",filter,data,function(err,result){
//   console.log(err);
//   console.log(result);
// });

//测试添加数据
// var data ={id:111,name:"王小明",age:14};
// db.add("stu",data,function(err,result){
//   console.log(err);
//   console.log(result);
// });

// db.findAll("stu",function(err,docs){
//   if(err){
//     console.log(err);
//   }else{
//     console.log(docs);
//   }
// })