import React, { Component } from 'react';
import store from '../store/FluxStore';
import * as action from '../actions/action.js';

export default class AppComponent extends Component{

	constructor(){
		super()

		this.state = {
			count: store.getCount()
		}
	}

	componentWillMount(){
		store.on('update', ()=>{
			this.setState({
				count: store.getCount()
			})
		})
	}

	increment(){
		action.incrementCount(1);
	}

	decrement(){
		action.decrementCount(1);
	}

	render(){
		return(
			<div>
				<h2>{this.state.count}</h2>
				<button onClick={this.increment.bind(this)}>INC</button>
				<button onClick={this.decrement.bind(this)}>DEC</button>
			</div>
		)
	}
}