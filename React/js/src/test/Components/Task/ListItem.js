import React, { Component } from 'react';

export default class ListItem extends Component{

	render(){
		let taskName = this.props.title; 
		return(
			<li>{taskName}</li>
		)
	}

}