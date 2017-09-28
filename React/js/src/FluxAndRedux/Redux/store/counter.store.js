import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { createStore } from 'redux';

// import { Provider } from '../component/Provider/counter.provider'
import { Provider } from 'react-redux'
import { Counter } from '../component/counter.component'

const reducer = (state = 0, action)=>{

	switch(action.type){
		case 'INC':
			return state = state + 1
		break
		case 'DEC':
			return state = state - 1
			break
		default:
			return state
	}

}
const store = createStore(reducer)

const render = ()=>{
	ReactDom.render( 
		<Provider store={store}>
			<Counter />
		</Provider>,
		 document.getElementById('root')
	);
}

store.subscribe(render)
render()

export default store;