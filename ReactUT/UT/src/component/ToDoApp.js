import React from 'react'

import {AddTodo} from './Container/AddTodo'
import {VisibleTodoList} from './Container/VisibleTodoList'

import {Footer} from './Presentational/Footer'



export const ToDoApp = () => (
	<div>				
		<AddTodo />
		<VisibleTodoList />
		<Footer />
	</div>
)
