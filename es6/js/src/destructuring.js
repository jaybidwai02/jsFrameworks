let obj = {
	entry:[1,2,3],
	per:{
		name:"Jay",
		age:25
	}
}

console.log(obj);

let { entry:arr, per:me } = obj;
console.log(arr);
console.log(me);
arr.push(4);
console.log(arr)
console.log(obj)