var mongoose = require('mongoose');
const collections = mongoose.connection.collections;

//ES6 promise
mongoose.Promise = global.Promise;

before(function(done){

	//Connect to mongoDB
	//mongoose.connect('mongodb://localhost/firstDB');
	mongoose.connect('mongodb://test:test@ds145370.mlab.com:45370/jay_test');

	mongoose.connection.once('open', function(){
		console.log('Connection to MongoDB is successfull...');
		done();
	}).on('error', function(err){
		console.log('Connection Faild because : ', err);
	});

});

/*beforeEach(function(done){

	mongoose.connection.collections.employees.drop(function(){
		done();
	});

})*/

beforeEach(function(done){

	collections.users.drop( function(){
		console.log('Collection records are deleted..');
		done();
	});

})
