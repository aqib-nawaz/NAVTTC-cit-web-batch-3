const express = require('express');
var MongoClient = require('mongodb').MongoClient;
var bodyParser = require('body-parser');
var fs = require('fs');

var url = "mongodb://localhost:27017/";
var urlencodedParser = bodyParser.urlencoded({ extended: false })

const app = express();

app.get('/', (req,res) => {
    fs.readFile('mongo_form.html', function(err, data){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
    });

});

app.post('/add_data', urlencodedParser, (req,resp) => {
  // Insert one record
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        
        var dbo = db.db("icp");
        var doc = { name: req.body.name, position: req.body.position, "service": parseInt(req.body.service) };
        dbo.collection("teachers").insertOne(doc, function(err, result) {
        if (err) throw err;
        console.log("1 document inserted successfully");
        resp.send("1 document inserted successfully");
        db.close();
        });
    }); 
});

app.listen(3000);
console.log('Web Server is listening at port '+ (3000));