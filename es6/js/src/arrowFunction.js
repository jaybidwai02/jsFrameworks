function incrementCount(count){
	return count + 10;
}
console.log("count is - ",incrementCount(10));

let incrementCount1 = (count) => {
	return count + 10;
}

console.log("count is - ",incrementCount1(20));

let incrementCount2 = count => {
	return count + 10;
}
console.log("count is - ",incrementCount2(30));

//works with only one argument and one return statement
let incrementCount3 = count => count + 10;

console.log("count is - ",incrementCount3(40));

