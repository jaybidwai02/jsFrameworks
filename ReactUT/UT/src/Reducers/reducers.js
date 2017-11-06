import { combineReducers } from 'redux'

export const todo = (state, action) =>{

	switch(action.type){
		case 'ADD_TODO':
			return {
				...action,
				completed:false
			}
		case 'TOGGLE_TODO':
			if(state.id != action.id) return state

			return {
				...state,
				completed: !state.completed
			}
		case 'UPDATE_TODO':
			if(state.id != action.id) return state

			return {
				...state,
				...action
			}
		default:
			return state;
	}

}

export const todos = (state = [], action) => {
	switch(action.type){
		case 'ADD_TODO':
		console.log('add red')
			return [
				...state,
				todo(undefined, action)
			]
		case 'TOGGLE_TODO':
			return state.map((t) => todo(t, action) )
		case 'UPDATE_TODO':
			return state.map((t) =>  todo(t, action))
		default:
			return state
	}
}

export const visibilityFilter = (state = 'SHOW_ALL', action) => {
	switch(action.type){
		case 'SET_VISIBILITY_FILTER':
			return action.filter
		default:
			return state
	}
}

export const edit = (state = null, action) => {
	switch(action.type){
		case 'EDIT_TODO':
			return action.id
		case 'ADD_TODO':
			return null
		case 'UPDATE_TODO':
			return null
		default:
			return state
	}
}

export const todoApp = combineReducers({
	todo: todos,
	visibilityFilter,
	edit
})