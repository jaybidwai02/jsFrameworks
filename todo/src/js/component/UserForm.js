import React, { Component } from 'react';


export class UserForm extends Component{
	
	constructor(){
		super();
		this.addTask = this.addTask.bind(this);
	}

	addTask(task){
		this.props.addTask(this.taskInput.value);
	}

	render(){
		return(
			<div className="userForm">
				<div className="inputControl">
					<input type="text" ref={(input)=>{this.taskInput = input } }/>
					<input type="submit" value="Add Task" onClick={this.addTask}/>
				</div>
			</div>
		)
	}
}