import React, { Component } from 'react';
import { Link } from 'react-router';

// import Header from './Header/Header.js';

export default class App extends Component{
	switchState(){
		console.log(this.props)
		//this.props.history.pushState(null, "contact")
	}
	render(){
		return(
			<div>
				
				{this.props.children}
				<div>
					<h1>This is Navigation</h1>
					<Link to="menu">Menu</Link>
					<Link to="contact">contact</Link>
					<button onClick={this.switchState.bind(this)}>Contact</button>

				</div>
			</div>
		)
	}
} 

