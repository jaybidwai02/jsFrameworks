export const setVisibilityFilter = (filter) =>{
	return {
		type:'SET_VISIBILITY_FILTER',
		filter
	}
}

let id = 0;
export const addTodo = ({task,priority,duetime}) => {
	console.log('ADD_TODO')
	return {
		type:'ADD_TODO',
		task,
		priority,
		duetime,
		id:id++
	}
}

export const toggleTodo = (id) => {
	return {
		type:'TOGGLE_TODO',
		id
	}
}
export const editTodo = (id) => {
	return {
		type:'EDIT_TODO',
		id
	}
}
export const updateTodo = ({id,task,priority,duetime}) => {
	console.log('UPDATE_TODO')
	/*console.log(id)
	console.log(task)
	console.log(priority)*/
	return {
		type:'UPDATE_TODO',
		id,
		task,
		priority,
		duetime
	}
}