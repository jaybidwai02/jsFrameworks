import React, { Component } from 'react'

export class CounterValue extends Component{

	render(){
		return(
			<div>
				<h1>{this.props.value}</h1>
				<button onClick={this.props.inc}>+</button>
				<button onClick={this.props.dec}>-</button>
			</div>
		)
	}

}