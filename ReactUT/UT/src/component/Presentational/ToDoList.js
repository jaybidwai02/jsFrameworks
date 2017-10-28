import React from 'react'
import {ToDo} from './ToDo'

export const ToDoList = ({
	todos,
	onTodoClick
}) => {
	todos= todos.map( (t) => {
		return ( <ToDo key={t.id} {...t} onClick={() => onTodoClick(t.id)}/> )
	})

	return (
		<ul>
			{todos}
		</ul>
	)
}