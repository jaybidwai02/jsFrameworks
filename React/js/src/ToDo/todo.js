import React, { Component } from 'react'
import ReactDom from 'react-dom'
import { createStore, combineReducers } from 'redux'
import {Provider, connect} from 'react-redux'

import * as action from './action.js'

// Action creator

const todo = (state, action) =>{

	switch(action.type){
		case 'ADD_TODO':
			return {
				id:action.id,
				text:action.text,
				completed:false
			}
		case 'TOGGLE_TODO':
			if(state.id != action.id) return state

			return {
				...state,
				completed: !state.completed
			}
		default:
			return state;
	}

}

const todos = (state = [], action) => {
	switch(action.type){
		case 'ADD_TODO':
			return [
				...state,
				todo(undefined, action)
			]
		case 'TOGGLE_TODO':
			return state.map((t) => todo(t, action) )
		default:
			return state
	}
}

const visibilityFilter = (state = 'SHOW_ALL', action) => {
	switch(action.type){
		case 'SET_VISIBILITY_FILTER':
			return action.filter
		default:
			return state
	}
}

const todoApp = combineReducers({
	todo: todos,
	visibilityFilter
})

/*const todoApp = (state = {}, action) => {
	return {
		todo:todo(state.todo, action),
		visibilityFilter:visibilityFilter(state.visibilityFilter, action)
	}
}*/

/*let initialState = [];
let action = {type:'ADD_TODO',id:0,text:'item1'};
Object.freeze(initialState);
let res = todo(initialState,action)
console.log(res)*/



/*et initialState = [
	{
		id:0,
		text:'item1',
		completed:false
	},
	{
		id:1,
		text:'item2',
		completed:false
	}
];
console.log(initialState)
let action = {type:'TOGGLE_TODO',id:1};
Object.freeze(initialState);
let res = todos(initialState,action)
console.log(res)*/

const Link = ({
	active,
	children,
	onFilterClick
}) => {  
	if(active) return (<span>{children}</span>)
	return (
		<a href="javascript:void(0)"
		 onClick={onFilterClick}
		>{children}</a>
	)
}

const mapStateToFilterLinkProps = (state, props) => {
	return {
		active:props.filter == state.visibilityFilter,
	}
}

const mapDispatchToFilterLinkProps = (dispatch, props) => {
	return {
		onFilterClick: ()=>
		dispatch(action.setVisibilityFilter(props.filter))
	}
}
		
const FilterLink = connect(
	mapStateToFilterLinkProps,
	mapDispatchToFilterLinkProps
)(Link)		
				
/*class FilterLink extends Component{
	componentDidMount(){
		const {store} = this.context
		this.unsubscribe = store.subscribe(()=>{
			this.forceUpdate()
		})
	}

	componentWillUnmount(){
		this.unsubscribe()
	}
	render(){
		const props = this.props
		const {store} = this.context
		const state = store.getState()
		return (
			<Link active = {props.filter == state.visibilityFilter} 
			onFilterClick={()=>
				store.dispatch({
					type:'SET_VISIBILITY_FILTER',
					filter:props.filter
				})
			}
			>
			{props.children}
			</Link>
		)
	}
}
FilterLink.contextTypes = {
	store: React.PropTypes.object
}*/

const showFilteredTodo = (
	todos,
	filter
) => {
	
	switch(filter){
		case 'SHOW_ALL':
			return todos
		case 'SHOW_ACTIVE':
			return todos.filter(t => !t.completed )
		case 'SHOW_COMPLETED':
			return todos.filter(t => t.completed)
	}
}

const ToDo = ({
	onClick,
	completed,
	text
}) => (
	<li 
		onClick={onClick}
		style={{textDecoration: completed ? 'line-through' : 'none'}}
	>
		{text}
	</li>
)

const ToDoList = ({
	todos,
	onTodoClick
}) => {
	todos= todos.map( (t) => {
		return ( <ToDo key={t.id} {...t} onClick={() => onTodoClick(t.id)}/> )
	})

	return (
		<ul>
			{todos}
		</ul>
	)
}

let AddTodo = ({ dispatch }) =>{
	let input;
	return (
		<div>
			<input type="text" ref={node => {input = node} } />
			<button onClick={() => {
				if(!input.value) return
				dispatch(action.addTodo(input.value))
				input.value = ''
				
			}}>Add Task</button>
		</div>
	)
}

/*AddTodo = connect(
	state => {
		return {}
	},
	dispatch => {
		return {dispatch}
	}
)(AddTodo)*/
AddTodo = connect()(AddTodo)

const Footer = () => (
	<div>
		show:{' '}
		<FilterLink filter="SHOW_ALL" > All </FilterLink>
		<FilterLink filter="SHOW_ACTIVE" > Active </FilterLink>
		<FilterLink filter="SHOW_COMPLETED" > Completed </FilterLink>
	</div>
)

const mapStateToProps = (state) => {
	return {
		todos:showFilteredTodo(state.todo, state.visibilityFilter)
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onTodoClick: (id) => 
		dispatch(action.toggleTodo(id))
	}
}

const VisibleTodoList = connect(
	mapStateToProps,
	mapDispatchToProps
)(ToDoList)

/*class VisibleTodoList extends Component{
	componentDidMount(){
		const {store} = this.context
		this.unsubscribe = store.subscribe(()=>{
			this.forceUpdate()
		})
	}

	componentWillUnmount(){
		this.unsubscribe()
	}
	render(){
		const props = this.props
		const {store} = this.context
		const state = store.getState()
		return(
			<ToDoList />
		)
	}
}
VisibleTodoList.contextTypes = {
	store:React.PropTypes.object
}*/


const ToDoApp = () => (
	<div>				
		<AddTodo />
		<VisibleTodoList />
		<Footer />
	</div>
)

// const store = createStore(todoApp)
/*class Provider extends Component{
	getChildContext(){
		return {
			store: this.props.store
		}
	}
	render(){
		return this.props.children
	}
}
Provider.childContextTypes = {
	store: React.PropTypes.object
}*/

ReactDom.render(
	<Provider store={createStore(todoApp)}>
		<ToDoApp />
	</Provider>,
	document.getElementById('root')
)
/*const render = () => {
	console.log(store.getState())
	ReactDom.render(
		<ToDoApp />,
		document.getElementById('root')
	)
}*/
// store.subscribe(render)

// render()

/*store.dispatch({
	type:'ADD_TODO',
	text:'item1',
	id:0
})
store.dispatch({
	type:'ADD_TODO',
	text:'item2',
	id:1
})
store.dispatch({
	type:'TOGGLE_TODO',
	id:1
})
store.dispatch({
	type:'SET_VISIBILITY_FILTER',
	filter:'SHOW_COMPLETED'
})*/
/*store.dispatch({
	type:'SHOW_COMPLETED'
})*/