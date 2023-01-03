// The Node.js file system module allows you to work with the file system on your computer.

var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
    if(req.url=='/'){
        fs.readFile('index.html', function(err, data){
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            res.end();
        });
    }
    else if(req.url=='/hi') {
        fs.readFile('hi.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
    }
    else{
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('Invlid url');
        res.end();
    }

}).listen(8080); 

console.log('Server is running at http://localhost:8080/');