var mocha = require('mocha');
var assert = require('assert');



//Describe about test case
describe('This is demo test', function(){

	//Write you test case
	it('This is test for adding two number 2 and 3', function(){
		assert(2+3 == 5);
	});

});

/* to run this test add  
	"scripts": {
	  "test": "mocha"
	},

	in package.json and run nmp run test

*/

