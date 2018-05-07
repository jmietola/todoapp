//Require Mongoose
var mongoose = require('mongoose');

// Define schema
var Schema = mongoose.Schema;

var TodoModelSchema = new Schema({
    name: String
});

// Compile model from schema
module.exports = mongoose.model('TodoModel', TodoModelSchema );
