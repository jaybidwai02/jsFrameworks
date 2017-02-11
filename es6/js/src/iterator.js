let arr = [1,2,3,4];
let sum = 0;
for(var i = 0; i < arr.length; i++){
	sum += arr[i];
}
console.log("For Sum :",sum);


let total = 0;
let iterator = arr.values();
//console.log(iterator);
let next = iterator.next();
// console.log(next);

while(!next.done){
	total += next.value;
	next = iterator.next();
}
console.log("Iterator total : ", total);