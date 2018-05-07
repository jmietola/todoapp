//Require Mongoose
var mongoose = require('mongoose');

// Define schema
var Schema = mongoose.Schema;

var TodoModelSchema = new Schema({
    a_string: String,
    a_date: Date
});

// Compile model from schema
module.exports = mongoose.model('TodoModel', TodoModelSchema );
