require('babel-register')({
	presets:['es2015','react','stage-2'],
	ignore: false
});

const express = require('express');
const React = require('react');
const ReactDOMServer = require('react-dom/server');

var ToDoApp = require('./src/js/component/ToDoApp');



const app = express();

app.set('view engine', 'ejs');
app.use('/dist', express.static(__dirname + '/dist'));

const ToDoAppFactory = React.createFactory(ToDoApp);

app.get('/', function(req, res){

	var todo = [
		{
			task: 'create todo app'
		}
	];

	//console.log(ToDoApp.default);
	//var obj = new ToDoApp;
	//console.log(obj.render());
	var serverApp = ToDoAppFactory();
	 var html = ReactDOMServer.renderToString(serverApp);
	 //console.log(html);
	res.render('index', {html:html, data : todo});
});










app.listen(3000);
console.log('Listining to 3000.....');
