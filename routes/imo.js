var express = require('express');
var router = express.Router();



var app = express();

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
module.exports = router;

module.exports = app;