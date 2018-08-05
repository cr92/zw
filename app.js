'use strict';

const Express = require('express');
const Mongoose = require('mongoose');
const BodyParser = require('body-parser');

const Routes = require('./routes/route.js');

const App = Express();

Mongoose.Promise = global.Promise;
Mongoose.connect(`mongodb://localhost/${process.env.DB}`);

App.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    next();
});

App.use(BodyParser.json());

Routes(App);

App.use(function error_handling_middleware(err, req, res, next) {
    res.status(500).send({
        error: err.message
    });
});

module.exports = App;