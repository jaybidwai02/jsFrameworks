import React, { Component } from 'react';

export default class Header extends Component{
	handelChange(event){
		this.props.changeTitel(event.target.value);
	}
	render(){
	const abc = 10;
		return(
			<div>			
				<h1>{this.props.titel}</h1>	
				<input value={this.props.titel} onChange={this.handelChange.bind(this)}/>
			</div>
		)
	}
}