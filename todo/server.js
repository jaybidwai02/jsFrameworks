require('babel-register')({
	presets:['es2015','react','stage-2']
});

const express = require('express');
const React = require('react');
const ReactDOMServer = require('react-dom/server');

var ToDoApp = require('./src/js/component/ToDoApp');
console.log(ToDoApp);



const app = express();

app.set('view engine', 'ejs');
app.use('/dist', express.static(__dirname + '/dist'));

const ToDoAppFactory = React.createFactory(ToDoApp);
// console.log(ToDoAppFactory);
// console.log(ToDoAppFactory());

app.get('/', function(req, res){
	var task = 'create todo app again 1';
	var todo = [
		{
			task
		}
	];

	//console.log(ToDoApp.default);
	//var obj = new ToDoApp;
	//console.log(obj.render());

	//need to pass initial state as parameter
	var serverApp = ToDoAppFactory({
		initialState:todo
	});
	 var html = ReactDOMServer.renderToString(serverApp);
	 // console.log(html);
	res.render('index', {html:html, data : todo});
});










app.listen(3000, ()=>{

console.log('Listining to 3000.....');
});
