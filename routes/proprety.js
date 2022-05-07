var express = require('express');
var router = express.Router();
const MongoClient = require('mongodb').MongoClient;
url ="mongodb+srv://JoaoIMO:imodream2022@cluster0.lyfie.mongodb.net/IMODREAM?retryWrites=true&w=majority";



router.get('/', function(req, res) {
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

router.get('/one', function(req, res) {
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("IMODREAM");
        dbo.collection("Proprety Attribute").find({PropId: 1}).toArray(function(err, result) {
            if (err) throw err;
            res.send(result);
            db.close();
        });
    });
});

router.get('/two', function(req, res) {
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("IMODREAM");
        dbo.collection("Proprety Attribute").find({PropId: 2}).toArray(function(err, result) {
            if (err) throw err;
            res.send(result);
            db.close();
        });
    });
});

router.get('/3', function(req, res) {
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("IMODREAM");
        dbo.collection("Proprety Attribute").find({PropId: 3}).toArray(function(err, result) {
            if (err) throw err;
            res.send(result);
            db.close();
        });
    });
});




router.post('/add_proprety', function(req, res) {
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
