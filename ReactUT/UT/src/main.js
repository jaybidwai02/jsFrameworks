import React, { Component } from 'react';
import ReactDom from 'react-dom';

import { createStore } from 'redux'
import {Provider} from 'react-redux'

import * as reducers from 'Reducers/reducers'
import {ToDoApp} from 'component/ToDoApp'
// import TodoList from 'component/TodoList'
/*var a = 110;
alert(10000)*/

// ReactDom.render(<TodoList todos={[{todo:'item1'}]}/>, document.getElementById('root'))
ReactDom.render(
	<Provider store={createStore(reducers.todoApp)}>
		<ToDoApp />
	</Provider>,
	document.getElementById('root')
)
// ReactDom.render(<ToDoApp />, document.getElementById('root'))