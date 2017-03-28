var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.set('view engine', 'ejs');


var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use('/css', express.static('css'));

app.get('/', function(req, res){
	res.send('I am from express');
});

app.post('/submit', urlencodedParser, function(req, res){
	console.log(req.body);
	res.render('success', {data:req.body});
});

app.get('/help', function(req, res){
	res.send('I am from express to help you');
});

app.get('/contact', function(req, res){
	res.send('I am from contact to help you');
});

app.get('/home', function(req, res){
	res.sendFile(__dirname + '/file/index.html');
});

//Route Parameters
app.get('/profile/:id', function(req, res){
	//res.send('profile with id : ' + req.params.id);
	var user = {
		name:'Jay',
		age:28
	}
	res.render('profile', {data: req.params.id, user:user})
});

app.listen(3000);