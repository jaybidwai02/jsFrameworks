import React, { Component } from 'react';

import todoStore from '../flux/ToDoAppSotre';


import { UserForm } from './UserForm';
import { ToDoTaskList } from './ToDoTaskList';

import * as todoActions from '../flux/Actions/todoActions';

export class ToDoApp extends Component{
	constructor(){
		super();
		this.addTask = this.addTask.bind(this);

		this.state = {
			todo : todoStore.getTodo()
		}
	}

	addTask(task){
		const newTask = {
			id: Date.now(),
			task
		}
		//console.log(task);
		todoActions.addTask(newTask);
	}

	componentDidMount() {
		todoStore.on('storeChange', ()=>{
			this.setState({
				todo: todoStore.getTodo()
			})
		});
	}

	render(){
		const { todo } = this.state;

		return(
			<div className="toDoApp">
					<UserForm addTask={this.addTask}/>
					<ToDoTaskList todo={todo}/>
			</div>
		)
	}
}