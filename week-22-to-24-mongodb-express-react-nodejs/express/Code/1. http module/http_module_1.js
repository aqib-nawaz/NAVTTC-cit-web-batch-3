// Modules are like libraries. They are used to provide functionality to your application.
// Modules are loaded using the require() function.
// The require() function takes a module name as an argument and returns the module.
// Node.js has a built-in module called HTTP, which allows Node.js to transfer data over the Hyper Text Transfer Protocol (HTTP).

var http = require('http');
var url = require('url');

//create a server object:
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(req.url); //write a response to the client
    res.write('<h1>Hello World</h1>');
    res.end(); //end the response
  }).listen(8080); //the server object listens on port 8080 
