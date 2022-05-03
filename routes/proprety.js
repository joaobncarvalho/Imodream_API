var createError = require('http-errors');
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var cors = require('cors');
const MongoClient = require('mongodb');

var app = express();

// PREPARAR API PARA RECEBER JSON E UNIFORMIZAR URLS
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
// PREPARAR API PARA LIDAR COM PROBLEMAS DE CORS
const corsOpts = { origin: '*', methods: ['GET', 'POST'], allowedHeaders: ['Content-Type']};
app.use(cors(corsOpts));


var app = express();

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


module.exports = router;