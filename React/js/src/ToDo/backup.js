import React, { Component } from 'react'
import ReactDom from 'react-dom'
import { createStore, combineReducers } from 'redux'

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

const FilterLink = ({
	filter,
	curentFilter,
	children,
	onFilterClick
}) => {  
	if(filter == curentFilter ) return (<span>{children}</span>)
	return (
		<a href="javascript:void(0)"
		 onClick={()=>{
		 	onFilterClick(filter)
		 }}
		>{children}</a>
	)
}

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

const AddTodo = ({
	onAddClick
}) =>{
	let input;
	return (
		<div>
			<input type="text" ref={node => {input = node} } />
			<button onClick={() => {
				onAddClick(input.value)
				input.value = ''
				
			}}>Add Task</button>
		</div>
	)
}

const Footer = ({
	visibilityFilter,
	onClick
}) => (
	<div>
		show:{' '}
		<FilterLink filter="SHOW_ALL" curentFilter={visibilityFilter} onFilterClick={onClick}> All </FilterLink>
		<FilterLink filter="SHOW_ACTIVE" curentFilter={visibilityFilter} onFilterClick={onClick}> Active </FilterLink>
		<FilterLink filter="SHOW_COMPLETED" curentFilter={visibilityFilter} onFilterClick={onClick}> Completed </FilterLink>
	</div>
)

let taskId = 0;
class ToDoApp = ({
	todo, 
	visibilityFilter
}) =>{
	/*render(){
		const {todo, visibilityFilter } = this.props
		// const filteredTodo = showFilteredTodo(todo, visibilityFilter)
		let todoTasks = filteredTodo
		todoTasks = todoTasks.map(task =>{
			return ( 
				<li key={task.id}
					onClick={() => {
						store.dispatch({
							type:'TOGGLE_TODO',
							id:task.id
						})
					}}
					style={{textDecoration: task.completed ? 'line-through' : 'none'}}
				>
					{task.text}
				</li>
			)
		})*/

		// console.log(this.props)
		return (
			<div>
				
				<AddTodo onAddClick={text => {
					if(!text) return
					store.dispatch({
						type:'ADD_TODO',
						text,
						id:taskId++
					})
					// text = ''
				}}/>
				<ToDoList todos={showFilteredTodo(todo, visibilityFilter)} onTodoClick={(id) => 
					store.dispatch({
						type:'TOGGLE_TODO',
						id
					})
				}/>

				<Footer 
				visibilityFilter={visibilityFilter}
				onClick={(filter) => {
					store.dispatch({
						type:'SET_VISIBILITY_FILTER',
						filter
					})
				}}
				/>
				
			</div>
		)
	//}
}

const store = createStore(todoApp)
const render = () => {
	console.log(store.getState())
	ReactDom.render(
		<ToDoApp 
		{...store.getState()}
		/>,
		document.getElementById('root')
	)
}
store.subscribe(render)

render()

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