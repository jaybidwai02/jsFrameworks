var fs = require('fs');

var myReadStream = fs.createReadStream(__dirname + '/file/readMe.txt');

myReadStream.on('data',function(chunk){
	console.log('New chunk is recived:');
	console.log(chunk);
})