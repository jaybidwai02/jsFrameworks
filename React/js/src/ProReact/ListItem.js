import React, {Component} from 'react';

export default class ListItem extends Component{
	render(){
		return(
			<li>my name is {this.props.name} and my age is {this.props.age}<a href="#">{this.props.name}</a> </li>
		)
	}
}