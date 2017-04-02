const mongoose = require('mongoose');
const collections = mongoose.connection.collections;

mongoose.Promise = global.Promise;

collections.users.drop( function(){
	console.log('Collection records are deleted..');
});