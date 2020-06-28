var express = require('express');
const path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var aggregatedRouter = require('./aggregatedRouter');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


// mount routers
const { BASE_PATH, API_VERSION } = process.env;
console.log(BASE_PATH, API_VERSION);
app.use(`/${BASE_PATH}/${API_VERSION}`, aggregatedRouter);

module.exports = app;
