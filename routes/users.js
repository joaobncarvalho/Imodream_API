var express = require('express');
var router = express.Router();
const MongoClient = require('mongodb').MongoClient;
url ="mongodb+srv://JoaoIMO:imodream2022@cluster0.lyfie.mongodb.net/IMODREAM?retryWrites=true&w=majority";




router.get('/', function(req, res) {
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




router.post('/add_users', function(req, res) {
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


router.get('/login/:email/:pw', function(req, res) {
  var email = req.params.email
  var pw = req.params.pw
  console.log(email,pw)
  MongoClient.connect(url, function(err, db) {

    if (err) throw err;
    var dbo = db.db("IMODREAM");
    dbo.collection("Users").find({email: email , pw: pw }).toArray(function(err, result) {
      if (err) throw err;
      res.send(result);
      db.close();
    });
  });
});




router.get('/sellers', function(req, res) {
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("IMODREAM");
    var query = "";
    dbo.collection("Users").find({utype:"Vendedor"}).toArray(function(err, result) {
      if (err) throw err;
      res.send(result);
      db.close();
    });
  });
});





module.exports = router;
