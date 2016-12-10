import React, { Component } from 'react';
import ReactDom from 'react-dom';

import Header from './Components/Header/Header.js';

class App extends Component{
	constructor(){
		super();
		this.state = {
			titel:"You are welcome here"
		}
	}
	changeState(titel){
		this.setState({titel});
	}

	render(){
		return(
			<div>
				<Header changeTitel={ this.changeState.bind(this) } titel={this.state.titel} />
			</div>
		)
	}
} 

ReactDom.render(<App />,document.getElementById('root'));