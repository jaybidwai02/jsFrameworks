import React, { Component } from 'react';
import ReactDom from 'react-dom';

import { createStore } from 'redux'
import {Provider} from 'react-redux'

import * as reducers from 'Reducers/reducers'
import {ToDoApp} from 'component/ToDoApp'

ReactDom.render(
	<Provider store={createStore(reducers.todoApp)}>
		<ToDoApp />
	</Provider>,
	document.getElementById('root')
)
