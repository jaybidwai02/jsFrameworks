var events = require('events');

var emitter = new events.EventEmitter();

emitter.on('customEvent', function(arg){
	console.log('event is emitted with : ' + arg);
});

emitter.emit('customEvent', 'my first custome event');