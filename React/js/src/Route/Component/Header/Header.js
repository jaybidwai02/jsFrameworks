import React, {Component} from 'react';
import { Link } from 'react-router';


export default class Header extends Component{

	render(){
		return(
			<div>
				<h1>This is Navigation</h1>
				<Link to="menu">Menu</Link>
				<Link to="contact">contact</Link>
				<button onClick={this.props.switchState()}>Contact</button>

			</div>
		)
	}
}