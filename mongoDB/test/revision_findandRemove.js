var assert = require('assert');

var user = require('../revision/models/user');

describe('find', function(){

	beforeEach(function(done){

		var person = new user({
			name:'Jay',
			age:25,
			city:'Pune'
		});

		person.save().then(function(){
			console.log('record saved...');
			done();
		});

	});

	it('This will find record from database', function(){

		user.findOne({name:'Jay'}).then(function(res){
			//console.log(res);
			assert(res.name == 'Jay');
		})

	});

	it('This will find and delete record from database', function(done){

		user.findOneAndRemove({name:'Jay'}).then(function(res){
			user.findOne({name:'Jay'}).then(function(res){
				//console.log(res);
				assert(res === null);
				done();
			})
		})

	})

})