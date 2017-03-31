import React, { Component } from 'react';

export class ToDoTaskListItem extends Component{
	render(){
		const {todoItem} = this.props;
		console.log(todoItem);
		return(
			<li>{todoItem.task}</li>
		)
	}
}