const express = require('express');
const logger = require('morgan');
const cors = require("cors");
require('dotenv').config();

const router = require('./routes');
const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
console.log(process.env.ORIGIN)
app.use(cors({ origin: process.env.ORIGIN}))


app.use('/api', router);

module.exports = app;
