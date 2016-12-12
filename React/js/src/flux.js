import React, { Component } from 'react';
import ReactDom from 'react-dom';

import ToDoStore from './Flux/Stores/ToDoStore';
import * as todoAction from './Flux/Actions/todoActions';

class ToDoList extends Component{
	constructor(){
		super();
		this.state = {
			todo : ToDoStore.getToDo()
		}
	}

	componentWillMount() {
		ToDoStore.on('change',()=>{
			this.setState({
				todo:ToDoStore.getToDo()
			})
		})
	}
	createToDo(){
		todoAction.dispatchCreatTodo(Date.now());
	}
	render(){
		const { todo } = this.state;
		let taskList = todo.map((todo) => {
			return <ToDoListItem key={todo.id}
													 task={todo.task} />
		});
		return(
			<div>
				<h1>To Do</h1>
				<button onClick={this.createToDo.bind(this)}>Create Task</button>
				<ul>
					{taskList}
				</ul>
			</div>
		)
	}
}

class ToDoListItem extends Component{
	render(){
		const { task } = this.props;
		return(
			<li><p>{task}</p></li>
		)
	}
}

ReactDom.render(<ToDoList />, document.getElementById('root'));