const express = require("express");
const MongoClient = require('mongodb');
var app = express();

const url = "mongodb+srv://JoaoIMO:imodream2022@cluster0.lyfie.mongodb.net/IMODREAM?retryWrites=true&w=majority";


const connectDB = () => {
  return MongoClient.connect(url);
};

module.exports = connectDB;

app.listen(3000, function() {
  console.log('Node app is running on port 3000');
});