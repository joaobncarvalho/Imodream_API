var createError = require('http-errors');
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var cors = require('cors');
var db = require('./database');

const MongoClient = require('mongodb').MongoClient;
const url = "mongodb+srv://JoaoIMO:imodream2022@cluster0.lyfie.mongodb.net/IMODREAM?retryWrites=true&w=majority";

 
var app = express();

// PREPARAR API PARA RECEBER JSON E UNIFORMIZAR URLS
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
// PREPARAR API PARA LIDAR COM PROBLEMAS DE CORS
const corsOpts = { origin: '*', methods: ['GET', 'POST'], allowedHeaders: ['Content-Type']};
app.use(cors(corsOpts));

// LISTA TODOS OS ELEMENTOS
app.get('/users', function(req, res) {
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

app.post('/add_users', function(req, res) {
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



app.get('/proprety', function(req, res) {
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

app.post('/add_proprety', function(req, res) {
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



app.get('/imo', function(req, res) {
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

app.post('/add_imo', function(req, res) {
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


app.listen(8080, function() {
    console.log('Node app is running on port 8080');
});
module.exports = app;