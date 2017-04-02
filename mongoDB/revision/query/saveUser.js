const mongoose = require('mongoose');
const user = require('../models/user');

mongoose.Promise = global.Promise;

var newUser = new user({
	name:'Jay',
	age:25,
	city:'Pusad'
});
//console.log(newUser);
newUser.save().then(function(){
	console.log('user added in database');
});

var newUser1 = new user({
	name:'Anup',
	age:25,
	city:'Pusad'
});
//console.log(newUser1);
newUser1.save().then(function(){
	console.log('user added in database');
});