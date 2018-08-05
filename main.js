'use strict';

require('dotenv').config();

const App = require('./app.js');
const PORT = process.env.PORT;

App.listen(PORT, () => {
    console.log('@ port', PORT);
});