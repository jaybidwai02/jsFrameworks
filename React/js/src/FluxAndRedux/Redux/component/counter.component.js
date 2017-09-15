import React, { Component } from 'react';
import store from '../store/counter.store.js'

export class Counter extends Component{
	constructor(){
		super();

		this.inc = this.inc.bind(this)
		this.dec = this.dec.bind(this)
	}

	inc(){
		console.log('inc')
	}
	dec(){
		console.log('dec')
	}

	render(){
		return (
			<div className="counter">
				<h1>0</h1>
				<button onClick={this.inc}>+</button>
				<button onClick={this.dec}>-</button>
			</div>
		)
	}
}