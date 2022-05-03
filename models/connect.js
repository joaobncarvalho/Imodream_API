const express = require("express");
var app = express();

const MongoClient = require('mongodb').MongoClient;

const url = "mongodb+srv://JoaoIMO:imodream2022@cluster0.lyfie.mongodb.net/IMODREAM?retryWrites=true&w=majority";


module.exports = url;
module.exports = app;


app.listen(3000, function() {
  app.get('/api/imo', function(req, res) {
    MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      var dbo = db.db("IMODREAM");
      var query = "";
      dbo.collection("Imobiliaria").find(query).toArray(function(err, result) {
        if (err) throw err;
        res.send(result);
        db.close();
      });
    });
  });
  console.log('Node app is running on port 3000');
});