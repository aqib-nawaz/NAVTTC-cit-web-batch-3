var MongoClient = require('mongodb').MongoClient;
var http = require('http');

var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
//   var query = { address: "Park Lane 38" };
  var query = { address: /^S/ };
  var mysort = { name: -1 };
  dbo.collection("customers").find({}, {projection:{_id:0}}).sort(mysort).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
}); 

