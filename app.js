const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const connectDB = require('./common/db/dbSetup');
const aggregatedRouter = require('./aggregatedRouter');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//connect with mongodb
connectDB();

// mount routers
const { BASE_PATH, API_VERSION } = process.env;
console.log(BASE_PATH, API_VERSION);
app.use(`/${BASE_PATH}/${API_VERSION}`, aggregatedRouter);

module.exports = app;
