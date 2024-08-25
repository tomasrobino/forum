var express = require('express');
var logger = require('morgan');


var router = require('./routes');
var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use('/', router);

module.exports = app;
