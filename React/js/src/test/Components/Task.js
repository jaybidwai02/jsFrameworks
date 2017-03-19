import React, { Component, PropTypes } from 'react';
import ReactDom from 'react-dom';

import ListItem from './Task/ListItem';

export default class Task extends Component{
	handleChange(event){
		let newName = event.target.value;
		this.props.changeName(newName);
	}

	render(){
		let taskName = this.props.title;
		//this.props.title = 'hi';

		let diffTasks = ['eat', 'drink', 'sleep'];

		let newTask = diffTasks.map((task, index) =>{
			return <ListItem title={task}/>
		});

		return(
			<div>
				<input type="text" onChange={this.handleChange.bind(this)}/>
				<p>{this.props.title}</p>
				<ul>
					{newTask}
				</ul>
			</div>
		)
	}


}

Task.propTypes =  {
	title: PropTypes.string
}

Task.defaultProps = {
	title: 'This is default title'
}