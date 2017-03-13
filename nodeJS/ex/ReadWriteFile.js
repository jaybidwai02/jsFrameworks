var fs = require('fs');

fs.writeFileSync('./file/post.txt', '{"name":"jay"}');
var read = fs.readFileSync('./file/post.txt', 'utf8');
var data = JSON.parse(read);
console.log(data);
console.log(data.name);