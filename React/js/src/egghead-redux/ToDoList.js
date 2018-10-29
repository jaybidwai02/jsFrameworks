import React from 'react';
import { connect } from 'react-redux';

const TodoList = ({todos}) => {
	return (
		<ul>
		{todos.map((item, index) => (<li key={index}>{item.text}</li>))}
		</ul>
	)
}

const mapStateToProps = (state) => {
	return {
		todos: state
	}
}
const TodoListContainer = connect(state => ({todos: state}),{})(TodoList);
export default TodoListContainer;
