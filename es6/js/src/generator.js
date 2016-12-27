/*function generator(){
	console.log("UI");
	console.log("DEV");
	console.log("QA");
}

generator();*/


/*function* gen(){
	console.log("UI");
	console.log("DEV");
	console.log("QA");
}

var iterator = gen();
iterator.next();*/

/*function* gen(){
	yield console.log("UI");
	yield console.log("DEV");
	yield console.log("QA");
}

var iterator = gen();
iterator.next();
iterator.next();
iterator.next();*/

/*function* gen(){
	yield "UI";
	yield "DEV";
	yield "QA";
	console.log("I am Done");

	return "Over";
}

var iterator = gen();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());*/

/*function* gen(){
	var a = yield "UI";
	console.log(a)
	var b = yield "DEV";
	console.log(b)
	var c = yield "QA";
	console.log(c)
	console.log("I am Done");

	return `my scrum size is ${a + b + c}`;
}

var iterator = gen();
console.log(iterator.next());
console.log(iterator.next(3));
console.log(iterator.next(5));
console.log(iterator.next(5));*/