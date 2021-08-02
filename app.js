'use strict';
const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const app = express();
const path = require('path');
/**     **
 * Import Routes
 */
const indexRoutes = require('./routes');
const bodyParser = require('body-parser');
const customerCreate = require('./routes/front')



// Tell the bodyparser middleware to accept more data
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

function corsMiddleware(req, res, next){
  if(process.env.NODE_ENV === 'develop'){
    console.log('- develop -');
    res.header('Access-Control-Allow-Origin', '*');

    // authorized headers for preflight requests
    // https://developer.mozilla.org/en-US/docs/Glossary/preflight_request
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();

    app.options('*', (req, res) => {
        // allowed XHR methods  
        res.header('Access-Control-Allow-Methods', 'GET, PATCH, PUT, POST, DELETE, OPTIONS');
        res.send();
    });    
  } else {
    console.log('- prod -');
    return next();
  }
}
/**
 * Using Routes
 */
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, './build')));
app.use('/', corsMiddleware, indexRoutes);
app.use('/front', corsMiddleware, customerCreate);
// app.use('/documents', doc);

module.exports = app;
