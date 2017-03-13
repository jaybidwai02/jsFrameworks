var fs = require('fs');
var res = '';

fs.writeFile('./file/post.txt', '{"name":"anup"}', function(err, data){
	console.log(err);
	console.log(data);
	fs.readFile('./file/post.txt', 'utf8', function(err, data){
		res = JSON.parse(data);
		console.log(res.name);
	})
});