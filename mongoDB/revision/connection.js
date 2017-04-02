const mongoose = require('mongoose');

const user = require('./models/user');
const deleteAllUser = require('./query/deleteAllUser');

const query = require('./query/saveUser');
const findUser = require('./query/findUser');

mongoose.connect('mongodb://test:test@ds145370.mlab.com:45370/jay_test');

mongoose.connection.once('open', function(){
	console.log('Connection successfull...');
}).on('error', function(err){
	console.log('error in connection'+ err);
});


