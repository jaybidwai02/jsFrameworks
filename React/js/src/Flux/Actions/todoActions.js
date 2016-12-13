import {Dispatcher} from 'flux';
import dispatcher from '../dispatcher';

export function dispatchCreatTodo(text){
	dispatcher.dispatch({
		type:'CREATE_TODO',
		text
	})
}

export function dispatchDeleteTodo(text){
	dispatcher.dispatch({
		type:'CREATE_TODO',
		text
	})
}