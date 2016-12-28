class BaseClass{
	constructor(name, age){
		this.name = name;
		this.age = age;
	}
	show(){
		console.log(`Student name is ${this.name} and student age is ${this.age}`);
	}
}

let obj = new BaseClass("Jay", 25);
obj.show();

/*class BaseClass{
	constructor(name, age){
		this.name = name;
		this.age = age;
	}
	show(){
		console.log(`My name is ${this.name} I am is ${this.age} years old`);
	}
}

class DerivedClass extends BaseClass{
	constructor(name, age, city){
		super(name, age);
		this.city = city;
	}
	show(){
		console.log(`Student name is ${this.name} I am is ${this.age} years old and I live in ${this.city}`);
	}
}

let obj = new DerivedClass("Jay", 25, "Noida");
obj.show();*/