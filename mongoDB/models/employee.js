var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//var model = mongoose.model;

//Create Schema for model

var EmployeeSchema = new Schema({
	name: String,
	age: Number,
	dept: String
});

//model first argument is nothing but the name you want to assign to collection of record
// model is nothing but singel entry in collection
var Employee = mongoose.model('employee', EmployeeSchema);

module.exports = Employee;