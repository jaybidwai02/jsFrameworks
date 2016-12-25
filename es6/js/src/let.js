function jsVar(){
	var message = "I am from Function";

	if(true){
		var message = "I am from IF statement";
		var count = 10;
		console.log("Inside if - ",message);
	}

	console.log('outside if - ',message);
	console.log('Count is  - ',count);
}
jsVar();

console.log("---------------------")

function es6Let(){
	let message = "I am from es6 function";

	if(true){
		let message = "I am from If statement"; // Creates block level scope
		let count = 10; // Creates block level scope
		console.log("Inside if - ",message);
	}

	console.log('outside if - ',message);
	//console.log('Count is  - ',count);
}
es6Let();


function Add(val) {
	 this.val= val; 
	this.add=function(arr){
		var self = this
		return arr.map(function (x) { 
			return self.val + x ;
		});
	}
}