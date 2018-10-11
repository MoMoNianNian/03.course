//1 引入模块，获取mongo客户端对象
var mongoClient = require("mongodb").MongoClient;
//2 定义mongo服务器的地址
var url = "mongodb://localhost:27017";
//3 数据库名称
var dbName = "web1807";
//4 集合名称
var collection = "stu";

//开始连接服务器
mongoClient.connect(url,function(err,client){
  if(err){
    console.log(err);
    return;
  }
  //没有出错，连接成功
  //通过client获取数据库
  var db = client.db(dbName);
  //获取集合
  var coll = db.collection(collection);
  //向集合中插入数据
  //db.collection("stu").insert({})
  // coll.insertOne({id:107,name:"张三",age:16},function(err,result){
  //     if(err){
  //       console.log(err);
  //       return;
  //     }
  //     //插入成功
  //     console.log(result);
  //     //关闭连接
  //     client.close();
  // });

  //删除集合中某个数据
  //db.collection.remove({})
  coll.remove({id:107},function(err,result){
    if(err){
      console.log(err);
      return;
    }
    console.log(result);
    client.close();
  })
  
})