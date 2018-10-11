var mongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017";
var dbName="web1807";
var collection="teacher";

mongoClient.connect(url,{useNewUrlPaeser:true},function(err,client){
  if(err){
    console.log(err);
    return;
  }
  
  var coll = client.db("web1807").collection("teacher");
  
  coll.updateMany({id:2},{$set:{sex:"M"}},function(err,result){
    if(err){
      console.log(err);
    }else{
      console.log(result);
    }
   
    client.close();
  })
  // coll.find({id:2}).toArray(function(err,result){
  //   if(err){
  //     console.log(err);
  //   return;
  //   }
  //   console.log(result);
  //   client.close();
  // })
})