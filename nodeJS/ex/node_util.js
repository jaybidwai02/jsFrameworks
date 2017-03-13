var events = require('events');
var util = require('util');

var Person = function(name){
	this.name = name;
}

util.inherits(Person, events.EventEmitter);

var jay = new Person('Jay');
var anup = new Person('Anup');
var soham = new Person('Soham');

var persons = [jay, anup, soham];

persons.forEach( function(person) {
	person.on('speak',function(msg){
		console.log(person.name + ' said ' + msg);
	})
});

jay.emit('speak', 'I am 25 years old');



