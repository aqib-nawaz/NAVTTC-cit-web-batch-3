var MongoClient = require('mongodb').MongoClient;
var http = require('http');

// var url = "mongodb://localhost:27017/";
var url = "mongodb+srv://aqib:aqib321@cluster0.ec10a26.mongodb.net/?retryWrites=true&w=majority";

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
        console.log('Connected Successfully!');

    var dbo = db.db("mydb");
    // Insert a record
    var myobj = { name: "Aqib Nawaz", address: "AUP" };
    dbo.collection("students").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    });

    dbo.collection("students").find({}).toArray(function(err, result) {
        if (err) throw err;
        console.log(result);
    db.close();

    }); 

});
