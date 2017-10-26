import React,{Component} from 'react'
import ReactDom from 'react-dom'
import ToDoItem from './ToDoItem'

class TodoList extends Component{
	constructor(){
		super()

		/*this.state = {
			todos:[]
		}*/
	}

	componentDidMount(){
		// console.log('test')
		// this.setState({todos:[{todo:'item1'}]})
	}

	renderTodo(todos){
		// console.log(todos)
		var todoItem =  todos.map((item, index) => {
			return <ToDoItem key={index} todo={item.todo} />
		})
		// console.log(todoItem)
		return todoItem
	}

	render(){
		// const {todos} = this.state
		const {todos} = this.props
		const todoItem = this.renderTodo(this.props.todos)
		// console.log(todoItem.length)
		
		return(
			<div>
				{todoItem}
			</div>
		)
	}
}

export default TodoList

