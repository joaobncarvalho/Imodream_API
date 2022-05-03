var createError = require('http-errors');
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var cors = require('cors');
var db = require('./database');



 
var app = express();

// PREPARAR API PARA RECEBER JSON E UNIFORMIZAR URLS
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
// PREPARAR API PARA LIDAR COM PROBLEMAS DE CORS
const corsOpts = { origin: '*', methods: ['GET', 'POST'], allowedHeaders: ['Content-Type']};
app.use(cors(corsOpts));















app.listen(8080, function() {
    console.log('Node app is running on port 8080');
});
module.exports = app;