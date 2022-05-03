var express = require('express');
var router = express.Router();


var app = express();

// LISTA TODOS OS ELEMENTOS
app.get('/api/users', function(req, res) {
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("IMODREAM");
    var query = "";
    dbo.collection("Users").find(query).toArray(function(err, result) {
      if (err) throw err;
      res.send(result);
      db.close();
    });
  });
});


app.post('/api/add_users', function(req, res) {
  MongoClient.connect(url, function(err, db ) {
    if (err) throw err;
    var dbo = db.db("IMODREAM");
    dbo.collection("Users").insertOne(req.body).catch(function(err, result) {
      if (err) throw err;
      res.send(result);
      db.close();
    });
  });
});


module.exports = router;
