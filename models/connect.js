const MongoClient = require('mongodb').MongoClient;

const connectDB = (url) => {
  return MongoClient.connect(url);
};

module.exports = connectDB;
