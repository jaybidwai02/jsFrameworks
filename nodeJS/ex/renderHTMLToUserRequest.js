var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var urlencodedParser = bodyParser.urlencoded({ extended: false });
app.use('/assets', express.static('assets'));

app.set('view engine', 'ejs');

app.get('/', function(req, res){
	res.writeHead(200, {'Content-Type': 'application/json'});
	res.end('{"name":"jay"}');
});

//respond with static html
app.get('/contact', function(req, res){
	res.render('contact', {qs: req.query});
	//res.sendFile(__dirname + '/views/profile.html');
});

//POST for contact
app.post('/contact', urlencodedParser, function(req, res){
	res.render('contact-success', {data: req.body});
})

app.get('/profile/:id', function(req, res){
	var data = {
		age:25,
		city:'Pusad',
		employments:['Congizant', 'Info Edige', 'Wipro']
	};

	res.render('profile', {id: req.params.id, data:data});
})


app.listen(3000);