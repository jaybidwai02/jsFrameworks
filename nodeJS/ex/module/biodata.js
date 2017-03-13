var name = "What's your name ?";

var printName = function(){
	console.log('My Name is ' + name);
}

module.exports = function(){
	return {
		name : name,
		printName : printName
	};
};