export const addTodo = text => dispatch => {
	dispatch({
		type: 'ADD_TODO',
		text,
	})
}
