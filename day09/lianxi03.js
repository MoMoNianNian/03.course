var fs = require("fs");

fs.readdir('./a', function (err, files) {
  if (err) {
    console.log(err);
    return;
  }
  console.log(files);
  /*for (var i = 0; i < files.length; i++) {
    console.log("外面：" + i);
    fs.stat("./a/" + files[i], function (err, stats) {
      console.log("里面：" + i);
      if (stats.isFile()) {
        console.log(files[i] + "是文件");
      } else {
        console.log(files[i] + "是文件夹");
      }

    });
  }*/
 var wenjian=[];
 var wenjianjia=[];  
 //递归
(function a(i){
  //必须先判定递归结束的条件

  if(i==files.length){
    //遍历递归结束，打印最后结果
    console.log("文件：" )
    for(k in wenjian){
      console.log(wenjian[k]);
    }
    console.log("文件夹：" )
    for(k in wenjian){
      console.log(wenjianjia[k]);
    }
   
    
    //当i与数组长度一样，说明遍历结束了
    return;
    
  }
 
  //遍历没有结束，检查判断每一个元素的状态
  fs.stat("./a/"+files[i],function(err,stats){
    
    if(err){
      console.log(err);
      return;
    }
    
    if(stats.isFile()){
      
    wenjian.push(files[i]) ;
   
      
    }else {
      
      wenjianjia.push(files[i]);
    }
    a(++i);   
  });

})(0)

});