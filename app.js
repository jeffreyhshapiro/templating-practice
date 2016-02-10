//shamoon coding

var express = require('express');
var app = express();
var PORT = process.env.NODE_ENV || 8110;
var mysql = require('mysql');

var connection = mysql.createConnection({
  port: 3306,
  host: 'localhost',
  user: 'root',
  password: 'secret',
  database: 'seinfeld_cast'
})

connection.connect(function(err){
  if(err){
    throw err;
  }
});

app.get('/', function(req, res){
  connection.query("SELECT * FROM cast_ranking", function(err, results){
    if (err) {throw err};
    res.send(results);
  });
});

app.listen(PORT, function(){
  console.log("listening on port %s", PORT);
})