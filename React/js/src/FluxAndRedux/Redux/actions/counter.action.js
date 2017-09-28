import store from '../store/counter.store.js'

export const INC = (payload) => {
	store.dispatch({
		type:'INC',
		payload
	})
}


export const DEC = (payload) =>{
	store.dispatch({
		type:'DEC',
		payload
	})
}