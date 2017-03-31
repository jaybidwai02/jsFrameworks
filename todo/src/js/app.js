import React, { Component } from 'react';
import ReactDom from 'react-dom';

import { ToDoApp } from './component/ToDoApp';

/*class App extends Component{
	render(){
		return(
			<h1>Jay....</h1>
		)
	}
}*/

const root = document.getElementById('root');
// console.log(root);
ReactDom.render(<ToDoApp />, root);