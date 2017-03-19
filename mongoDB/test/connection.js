var mongoose = require('mongoose');

//ES6 promise
mongoose.Promise = global.Promise;

before(function(done){

	//Connect to mongoDB
	mongoose.connect('mongodb://localhost/firstDB');

	mongoose.connection.once('open', function(){
		console.log('Connection to MongoDB is successfull...');
		done();
	}).on('error', function(err){
		console.log('Connection Faild because : ', err);
	});

});

beforeEach(function(done){

	mongoose.connection.collections.employees.drop(function(){
		done();
	});

})
