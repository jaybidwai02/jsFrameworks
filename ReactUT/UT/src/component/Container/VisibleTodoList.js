import React from 'react'
import {connect} from 'react-redux'

import * as action from 'action/action'
import {ToDoList} from '../Presentational/ToDoList'

const showFilteredTodo = (
	todos,
	filter
) => {	
	switch(filter){
		case 'SHOW_ALL':
			return todos
		case 'SHOW_ACTIVE':
			return todos.filter(t => !t.completed )
		case 'SHOW_COMPLETED':
			return todos.filter(t => t.completed)
	}
}
const mapStateToProps = (state) => {
	console.log(state)
	return {
		todos:showFilteredTodo(state.todo, state.visibilityFilter)
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		onTodoClick: (id) => 
		dispatch(action.toggleTodo(id)),
		onEdit : (id) => {
			return dispatch(action.editTodo(id))
		}
		
	}
}
export const VisibleTodoList = connect(
	mapStateToProps,
	mapDispatchToProps
)(ToDoList)