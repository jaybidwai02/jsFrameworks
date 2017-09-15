import React, { Component } from 'react';
import ReactDom from 'react-dom';
// import { Counter } from './component/counter.component'
import store from './store/counter.store.js'

// ReactDom.render( <Counter/>, document.getElementById('root'));










/*import { createStore } from 'redux';

const counter = (state = 0, action) => {
	switch(action.type){
		case 'INC':
			return state + 1
			break
		case 'DEC':
			return state - 1
			break
		default:
			return state
	}
}

const store = createStore(counter)

const eventListner = () =>{
	console.log(store.getState())
}

eventListner()

store.subscribe(eventListner)
window.store = store

document.addEventListener('click', () => {
	store.dispatch({type:'INC'})
})*/