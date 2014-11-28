var express = require('express');
var app = express();

var mongo = require('mongodb-wrapper');

var db = mongo.db('localhost', 27017, 'tennis_court_api');
db.collection('cities');
db.collection('courts');

app.get('/', function(req, res){
  res.send('<h2> Welcome! </h2>');
});

// Gets for cities index and city by _ID
app.get('/cities', function(req, res){
  db.cities.find().toArray(function(err, cities){
    res.send(cities);
  });  
});

app.get('/cities/:id', function(req, res){
  db.cities.find({'_id': req.params.id.capitalize() }).toArray(function(err, cities){
    res.send(cities);
  });
});

app.get('/cities/:id/courts', function(req, res){
  db.courts.find({'city_id': req.params.id.capitalize() }).toArray(function(err, courts){
    res.send(courts);
  });
});

// Gets for courts index and courts by url
app.get('/courts', function(req, res){
  db.courts.find().toArray(function(err, courts){
    res.send(courts);
  });
});

app.get('/courts/:url', function(req, res){
  db.courts.find({'url': req.params.url }).toArray(function(err, courts){
    res.send(courts);
  });
});


var server = app.listen(3000, function(){
  var host = server.address().address;
  var port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});

String.prototype.capitalize = function() {
  return this.charAt(0).toUpperCase() + this.slice(1);
}
