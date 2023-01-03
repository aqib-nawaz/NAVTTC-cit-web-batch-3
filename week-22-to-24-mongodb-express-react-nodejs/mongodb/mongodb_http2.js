var MongoClient = require('mongodb').MongoClient;
var http = require('http');
var url = require('url');
var cors = require('cors');

var mongo_url = "mongodb://localhost:27017/";

http.createServer(function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
    res.setHeader('Access-Control-Max-Age', 2592000); // 30 days   
      
    MongoClient.connect(mongo_url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("icp");
        var q = url.parse(req.url, true).query;
        var query = {"Platform":q.plt};
        if(q.plt != undefined) {
            // var mysort = { Platform: -1 };
            dbo.collection("vgsales").find(query, {projection:{_id:0}}).toArray(function(err, result) {
            if (err) throw err;
                console.log(result);
                res.writeHead(200, {'Content-Type': 'text/html'});
                for(var i=0; i<result.length; i++){
                    res.write(JSON.stringify(result[i].Name));
                }
                res.end();
            db.close();
            });
        } else {
            res.end('No records found!');
        }
      });
    }).listen(8080);

    console.log('Server running at http://localhost:8080/');