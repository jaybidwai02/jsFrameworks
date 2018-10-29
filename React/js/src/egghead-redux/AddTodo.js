import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from './Actions';

const AddTodo = ({onClick}) => {
	let todoItem;
	return (
	<div>
		<input type="text" name="todo" ref={node => todoItem = node}/>
		<button onClick={() => onClick(todoItem.value)}>Add Todo</button>
	</div>
)}

const mapStateToProps = {};
const mapDispatchToProps = (dispatch) => ({
	onClick: (text) => dispatch(addTodo(text))
})

const AddTodoContainer = connect(null, mapDispatchToProps)(AddTodo);
export default AddTodoContainer;