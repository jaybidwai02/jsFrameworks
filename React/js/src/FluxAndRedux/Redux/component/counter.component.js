import React, { Component } from 'react';
import { connect } from 'react-redux'
// import * as action from '../actions/counter.action.js'

import {CounterValue} from './presentential.counter.component'

// Genrate container component using connect method

const mapStateToProps = (state) =>{
	console.log(state)
	return {
		value: state
	}
}

const mapDispatchToProps = (dispatch) => {

	let inc = () => {
		dispatch({
			type:'INC',
			payload:1
		})
	}
	let dec = () => {
		dispatch({
			type:'DEC',
			payload:1
		})
	}

	return {
		inc:inc.bind(this),
		dec:dec.bind(this)
	}
}

const App = connect(
		mapStateToProps,
		mapDispatchToProps
	)(CounterValue)

export class Counter extends Component{
	render(){
		return(
			<div className='counter'>
				<App />
			</div>
		)
	}
}

