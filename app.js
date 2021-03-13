// import global modules
const express = require('express');
const bodyParser = require('body-parser');

// import local modules
const routes = require('./routes');

// global variables
const { /*BASE_PATH,*/ PORT = 3000 } = process.env;

// app creation
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// routes connection
app.use('/', routes);

// port listening
app.listen(PORT, () => {});
