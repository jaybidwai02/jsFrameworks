var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res){
	console.log('request made :' + req.url);

	//res.writeHead(200, {'Content-Type':'text/plain'});
	//res.writeHead(200, {'Content-Type':'application/json'});
	res.writeHead(200, {'Content-Type':'text/html'});

	//var readStream = fs.createReadStream(__dirname + '/file/readMe.txt');
	var readStream = fs.createReadStream(__dirname + '/file/index.html');
	readStream.pipe(res);
	//res.end('I am Jay');
});

server.listen(3000, '127.0.0.1');
console.log('Listining to 3000.....');