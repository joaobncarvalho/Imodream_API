const MongoClient = require('mongodb');

const url = "mongodb+srv://JoaoIMO:imodream2022@cluster0.lyfie.mongodb.net/IMODREAM?retryWrites=true&w=majority"

console.log("connectionString = " + url);

const Url = MongoClient;
const url = new Url({
  url,
  max: 10,
  ssl: {
    require: true,
    rejectUnauthorized: false
  }
})

module.exports = pool;