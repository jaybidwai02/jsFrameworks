export const setVisibilityFilter = (filter) =>{
	return {
		type:'SET_VISIBILITY_FILTER',
		filter
	}
}

let id = 0;
export const addTodo = (text) => {
	return {
		type:'ADD_TODO',
		text,
		id:id++
	}
}

export const toggleTodo = (id) => {
	return {
		type:'TOGGLE_TODO',
		id
	}
}