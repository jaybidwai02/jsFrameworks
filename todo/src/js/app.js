import React, { Component } from 'react';
import ReactDom from 'react-dom';

import { Route, Router, IndexRoute, hashHistory } from 'react-router';

// import ToDoApp from './component/ToDoApp';
// import Completed from './component/ToDoApp/completed';
import routes from './route';

/*class App extends Component{
	render(){
		return(
			<h1>Jay........</h1>
		)
	}
}*/

const root = document.getElementById('root');
// console.log(root);


// <ToDoApp />
ReactDom.render(
	<Router history={hashHistory}>
		{routes}
	</Router>
	, root);
