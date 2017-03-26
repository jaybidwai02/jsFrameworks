import dispatcher from '../dispatcher';

export function incrementCount(data){
	console.log(data);
	dispatcher.dispatch({
		action: 'INC_COUNT',
		data
	});
}

export function decrementCount(data){
	dispatcher.dispatch({
		action: 'DEC_COUNT',
		data
	});
}