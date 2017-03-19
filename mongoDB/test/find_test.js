var assert = require('assert');
var employee = require('../models/employee');


describe('Finding records from database', function(){

	beforeEach(function(done){

		var person = new employee({
			name:'Jay',
			age:25,
			dept:'Font End'
		});

		person.save().then(function(){
			done();
		});

	});

	it('This will find record from database', function(){

		employee.findOne({name:'Jay'}).then(function(res){
			//console.log(res);
			assert(res.name == 'Jay');
		})

	})

})