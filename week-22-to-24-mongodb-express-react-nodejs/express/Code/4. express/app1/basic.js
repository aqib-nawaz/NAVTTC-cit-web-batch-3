const express = require('express');
const app = express();

app.get('/', (req,res) => {
  res.send("Hello");
});

app.get('/pop', (req,res) => {
  res.send("Hello Pop");
});

app.listen(3000);
console.log('Web Server is listening at port '+ (3000));