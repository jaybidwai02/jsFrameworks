import dispatcher from '../dispatcher/Dispatcher';

export const incrementCount = (payload)=>{
	dispatcher.dispatch({
		type:'INC',
		payload
	})
}

export const decrementCount = (payload)=>{
	dispatcher.dispatch({
		type:'DEC',
		payload
	})
}