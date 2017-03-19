var assert = require('assert');
var employee = require('../models/employee');

describe('Saving Records in db', function(){

	it('saves record in db', function(done){

		var person = new employee({
			name:'Jay',
			age:25,
			dept:'Front End'
		});

		person.save().then(function(){
			assert(person.isNew === false);
			done();
		});
		
	});

});