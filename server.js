const express = require('express');
const swagger = require("swagger-node-express");
const app = express();
const port = process.env.PORT || 5000;

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');



// Add headers
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});


//Import the mongoose module
var mongoose = require('mongoose');
var password = require('./secret');
//Set up default mongoose connection
var mongoDB = `mongodb://jmietola:${password}@ds016128.mlab.com:16128/todo`;
mongoose.connect(mongoDB);
// Get Mongoose to use the global promise library
mongoose.Promise = global.Promise;
//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
var TodoModel = require('./models/todo');

// Create an instance of model SomeModel
var awesome_instance = new TodoModel({ name: 'awesome' });

// Save the new model instance, passing a callback
awesome_instance.save(function (err) {
  if (err) return handleError(err);
  // saved!
});

var bodyParser = require('body-parser');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Couple the application to the Swagger module.
swagger.setAppHandler(app);

var options = {
  explorer : true
};

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument, options));

// Router
var router = express.Router();  // get an instance of the express Router

// middleware
router.use(function(req, res, next) {
    // do logging
    console.log('Logs');
    next();
});

app.use(require('./controllers'))

app.listen(port, () => console.log(`Listening on port ${port}`));
