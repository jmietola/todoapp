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


var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/todo');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
});

console.log(mongoose.connection.host);
console.log(mongoose.connection.port);

//var Todo = require('./models/todo');

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

router.route('/todos')

    .get(function(req, res) {
    res.json({ message: ['Mongoose ORM', 'Move logic from server to separate files'] });
    })


    // Create todo
    .post(function(req, res) {
    res.json({ message: 'Todo Created' });
  });


router.route('/todos/:id')

    .put((req, res) => {
      console.log(req.params.id);
      res.send({ });
    })

    .delete((req, res) => {
      console.log(req.params.id);
      res.send({ });
    });

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

app.listen(port, () => console.log(`Listening on port ${port}`));
