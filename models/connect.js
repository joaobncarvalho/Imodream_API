const express = require("express");
var app = express();

const MongoClient = require('mongodb').MongoClient;

const url = "mongodb+srv://JoaoIMO:imodream2022@cluster0.lyfie.mongodb.net/IMODREAM?retryWrites=true&w=majority";


module.exports = url;
module.exports = app;


app.listen(3000, function() {

  console.log('Node app is running on port 3000');
});