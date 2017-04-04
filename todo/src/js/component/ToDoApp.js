import React, { Component } from 'react';

import todoStore from '../flux/ToDoAppSotre';


import { UserForm } from './UserForm';
import { ToDoTaskList } from './ToDoTaskList';

import * as todoActions from '../flux/Actions/todoActions';

class ToDoApp extends Component{
	constructor(){
		super();
		this.addTask = this.addTask.bind(this);

		this.state = {
			todo : todoStore.getTodo()
		}
		console.log('in toDoApp', this.props);
	}

	addTask(task){
		const newTask = {
			id: Date.now(),
			task
		}
		console.log(task);
		todoActions.addTask(newTask);
	}

	componentWillMount() {
		// todoStore.setTodo(appData)
		console.log('in cwm')
		todoStore.on('storeChange', ()=>{
			this.setState({
				todo: todoStore.getTodo()
			})
		});

		todoStore.setTodo(this.props.initialState);
	}

	componentDidMount() {
		console.log('in cdm')
		console.log(this.props);		
	}

	render(){
		console.log('in toDoApp', this.props);
		
		const { todo } = this.state;

		return(
			<div className="toDoApp">
					<UserForm addTask={this.addTask}/>
					<ToDoTaskList todo={todo}/>
			</div>
		)
	}
}

module.exports = ToDoApp;