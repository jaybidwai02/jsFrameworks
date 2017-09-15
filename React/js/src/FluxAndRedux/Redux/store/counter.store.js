import { createStore } from 'redux';
import React, { Component } from 'react';
import ReactDom from 'react-dom';

import { Counter } from '../component/counter.component'

const reducer = (state = 0, action)=>{

	switch(action.type){
		case 'INC':
			state = state + 1
		break
		case 'DEC':
			state = state - 1
			break
		default:
			state
	}

}
const store = createStore(reducer)

const render = ()=>{
	ReactDom.render( <Counter/>, document.getElementById('root'));
}

store.subscribe(render)
render()

// export default  store;

// export const db = store;

export default store;