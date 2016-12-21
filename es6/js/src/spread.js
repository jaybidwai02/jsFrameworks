let UI = ["HTML","CSS","JS","AngularJs","ES6","React"];
let DEV = ["Java","PHP","SQL",".Net","Ruby on Rails"];

let FullStack = UI.concat(DEV);
console.log(FullStack);

let FullStack1 = [...UI, ...DEV];
console.log(FullStack1);


function addNumbers(a, b, c){
	return a + b + c;
}
let numbers = [10,20,30];

console.log(addNumbers(numbers[0], numbers[1], numbers[2]))
//console.log(addNumbers(...numbers));
