var fs = require('fs');

var mongo = require('mongodb-wrapper')

var db = mongo.db('localhost', 27017, 'tennis_court_api')
db.collection('cities');
db.collection('courts');

fs.readdir('./seeds',function(err, data){
  data.forEach(function(file){
    fs.readFile('seeds/' + file, function(err, data){
      
      if ( file.indexOf('city') != -1 ){
        
        db.cities.insert(JSON.parse(data), function(){
          console.log(file + " has been seeded into the cities collection")
        });

      } else if( file.indexOf('courts') != -1 ){

        db.courts.insert(JSON.parse(data), function(){
          console.log(file + " has been seeded into the courts collection")
        });

      }

    })
  })
  console.log('db has been seeded..')
});
