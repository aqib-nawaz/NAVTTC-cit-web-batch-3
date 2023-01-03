var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
    var dbo = db.db("icp");
    var query = {Platform:"PS2", Genre: "Action"};
    dbo.collection("vgsales").find(query, { projection: { _id: 0, Name: 1, Publisher: 1 } }).toArray(function(err, result) {
    // dbo.collection("customers").find({}, { projection: { _id: 0, name: 1, address: 1 } }).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
}); 