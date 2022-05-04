const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');


const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const imoRouter = require('./routes/imo');
const propretyRouter = require('./routes/proprety');


const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
// PREPARAR API PARA LIDAR COM PROBLEMAS DE CORS
const corsOpts = { origin: '*', methods: ['GET', 'POST'], allowedHeaders: ['Content-Type']};
app.use(cors(corsOpts));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', indexRouter);
app.use('/api/users', usersRouter);
app.use('/api/imo', imoRouter);
app.use('/api/proprety',propretyRouter);


app.listen(8080, function() {

    console.log('Node app is running on port 8080');
});

module.exports = app;
