const express = require("express");
const MongoClient = require('mongodb');
var app = express();


const connectDB = (url) => {
  return MongoClient.connect(url);
};

module.exports = connectDB;

app.listen(3000, function() {
  console.log('Node app is running on port 3000');
});