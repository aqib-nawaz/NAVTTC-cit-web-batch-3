var http = require("http");
var url = require("url");
const countries= require('./countries.json')
http
    .createServer(function (req, res) {
        res.writeHead(200, { "Content-Type": "text/html" });
        var q = url.parse(req.url, true).query;
        var country =  q.country
        var text = countries.filter(c => c.country == country);
        
        res.end(JSON.stringify(text));

    })
    .listen(8090);
