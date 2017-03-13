var biodata = require('./biodata');
var anupBiodata = biodata();
//biodata.name = "Anup";

function saymyName(){
	console.log('My name is : ' + anupBiodata.name);
}

module.exports = {
	saymyName : saymyName
}