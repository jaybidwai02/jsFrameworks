import React, { Component } from 'react';
import { ToDoTaskListItem } from './ToDoTaskListItem';

export class ToDoTaskList extends Component{
	render(){
		const {todo} = this.props
		console.log('in todotasklist', this.props);
		const todoList = todo.map((item, index)=>{

			return <ToDoTaskListItem 
							key={index} 
							todoItem={item}/>

		});

		//console.log(todoList);

		return(
			<div className="taskList">
				<ul>
					{todoList}
				</ul>
			</div>
		)
	}
}