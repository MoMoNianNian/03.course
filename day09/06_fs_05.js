var fs = require("fs");


fs.stat("./day09.txt",function(err,stats){
  if(err){
    console.log(err);
  }else{
    console.log(stats.isFile());
  }
});

var stats = fs.statSync("./day09.txt");