import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'

const todo = (state = {}, action) => {
	switch(action.type) {
		case 'ADD_TODO':
			return {
				id: action.id,
				text: action.text,
				complete: false
			}
	}
}

const todos = (state = [], action) => {
	switch(action.type) {
		case 'ADD_TODO':
		return [
			...state,
			todo(undefined, action)
		]
		default:
		return state;
	}
}
const middleware = applyMiddleware(thunk)
export default createStore(
	todos, 
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
	middleware
)