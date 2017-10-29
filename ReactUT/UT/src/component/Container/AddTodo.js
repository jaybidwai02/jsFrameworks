import React, {Component} from 'react'
import {connect} from 'react-redux'
import shallowCompare from 'react-addons-shallow-compare'; 


import * as action from 'action/action'

export class AddTodo extends Component{
	// let input,priority;
	constructor(props){
		super(props)
		this.state = {
			task:'',
			priority:'',
			duetime:''
		}
		this.handleChange = this.handleChange.bind(this)
		this.setStateToDefault = this.setStateToDefault.bind(this)
		this.dispatchAction = this.dispatchAction.bind(this)
		// this.isModify = false
	}

	handleChange(e){
		console.log(e.target.value)
		this.setState({
			[e.target.name] : e.target.value
		})
	}

	setStateToDefault(){
		this.setState({
			task:'',
			priority:'',
			duetime:''
		})
	}
	/*shouldComponentUpdate(state, prop){
		console.log('up')

		return state.selected.id == prop.id
	}*/
	componentWillReceiveProps(nextProps){
		if(nextProps.isModify){	
			console.log('in prop')		
			console.log(nextProps)		
			this.setState({
				...nextProps.selected
			})
			// this.isModify = true;
		}else{
			// this.isModify = false;
		}
	}

	dispatchAction(e){
		e.preventDefault()
		const {selected, dispatch, isModify } = this.props
		console.log(selected)
		console.log(this.state)
		// if(!this.state.task) return
		if(isModify){
			dispatch(
				action.updateTodo({
					...this.state,
					id:selected.id
				})
			)

		}else{
			dispatch(
				action.addTodo({...this.state})
			)
		}
		
		this.setStateToDefault()
	}
	render(){
		const {selected,dispatch, isModify } = this.props	
		return (
			<div>
			<form onSubmit={this.dispatchAction}>
				<input type="text" name="task" onChange={this.handleChange} value={this.state.task} required/>
				<input type="number" name="priority" onChange={this.handleChange} value={this.state.priority} min="1" max="100" required/>
				<input type="time" name="duetime" onChange={this.handleChange} value={this.state.duetime}  required/>
				
				<button>{ !isModify ? 'Add Task' : 'Update' }</button>
			</form>
			</div>
		)
	}
}
const getSelected = (state) =>{
	let modify = state.todo.filter((t) => t.id == state.edit)
	return modify.length ? modify : [{}]
}

const mapStateToProps = (state) => {
	return {
		selected: getSelected(state)[0],
		isModify:state.edit != null
	}
}
AddTodo = connect(
	mapStateToProps,
	(dispatch) => ({dispatch})
)(AddTodo)

// export AddTodo