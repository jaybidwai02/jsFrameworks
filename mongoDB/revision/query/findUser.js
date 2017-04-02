const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const user = require('../models/user');

/*user.find({name:'Anup'}).then(function(result){
	console.log('Records in user with name Jay: ', result);
})*/