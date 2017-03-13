var http = require('http');

var server = http.createServer(function(req, res){
	console.log('Request was made for : ' + req.url);

	res.writeHead(200, {'Content-Type':'text/plain'});
	res.end('this is your response');
});

server.listen(3000);
console.log('Listing...');