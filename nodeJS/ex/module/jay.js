var biodata = require('./biodata');
var jayBiodata = biodata();

jayBiodata.name = "Jay";

function saymyName(){
	console.log('My name is : ' + jayBiodata.name);
}

module.exports = {
	saymyName : saymyName
}