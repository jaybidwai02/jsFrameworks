import React, { Component } from 'react';
import ReactDom from 'react-dom';


class App extends Component{
	render(){
		return(
			<div>
				<h1>Hi This Is App</h1>
			</div>
		)
	}
}

ReactDom.render(<App />,document.getElementById('root'));