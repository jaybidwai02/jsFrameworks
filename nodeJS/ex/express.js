var express = require('express');

var app = express();

//Respond to request
app.get('/', function(req, res){
	res.send('This is from express');
});

app.get('/contact', function(req, res){
	res.send('This is contact page');
});

//Rute parameters
app.get('/profile/:id', function(req, res){
	res.send('You requested profile with id : ' + req.params.id);
})

app.listen(3000);