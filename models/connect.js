const express = require("express");
var app = express();

const MongoClient = require('mongodb').MongoClient;

const url = "mongodb+srv://JoaoIMO:imodream2022@cluster0.lyfie.mongodb.net/IMODREAM?retryWrites=true&w=majority";


module.exports = url;
module.exports = app;

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


app.post('/api/add_imo', function(req, res) {
  MongoClient.connect(url, function(err, db ) {
    if (err) throw err;
    var dbo = db.db("IMODREAM");
    dbo.collection("Imobiliaria").insertOne(req.body).catch(function(err, result) {
      if (err) throw err;
      res.send(result);
      db.close();
    });
  });
});


app.get('/api/proprety', function(req, res) {
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("IMODREAM");
    var query = "";
    dbo.collection("Proprety Attribute").find(query).toArray(function(err, result) {
      if (err) throw err;
      res.send(result);
      db.close();
    });
  });
});

app.post('/api/add_proprety', function(req, res) {
  MongoClient.connect(url, function(err, db ) {
    if (err) throw err;
    var dbo = db.db("IMODREAM");
    dbo.collection("Proprety Attribute").insertOne(req.body).catch(function(err, result) {
      if (err) throw err;
      res.send(result);
      db.close();
    });
  });
});


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


app.listen(3000, function() {
  console.log('Node app is running on port 3000');
});