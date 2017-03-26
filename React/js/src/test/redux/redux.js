import {createStore, combineReducers, applyMiddleware} from 'redux';

import logger from 'redux-logger';
import thunk from 'redux-thunk';

/*const reducer = (state, action)=>{
	switch(action.type){
		case 'INC': {
			state = state + 1;
			break;
		}
		case 'DEC': {
			state = state - 1;
		}
	}
 return state;
}*/

const userReducer = (state={}, action) =>{
	switch(action.type){
		case 'FETCHING':{
			console.log('fetching....................');
			break;
		}

		case 'FETCHED':{
			state = {...state, ...action.payload}
			break;
		}

		case 'CHANGE_NAME':{
			state = {...state, name:action.payload}
			break;
		}

		case 'CHANGE_AGE': {
			state = {...state, age:action.payload}
			break;
		}
	}

	return state;
}

const tweetReducer = (state=[], action) =>{
	return state;
}

/*const logger = (store) => (next) => (action)=>{
	console.log('fired');


	next(action);
}
*/
const middleware = applyMiddleware(thunk, logger);

const reducer = combineReducers({
	user: userReducer,
	tweet: tweetReducer
});

const store = createStore(reducer, middleware);


store.subscribe(()=>{
	console.log('store change', store.getState());
});

store.dispatch({type:'CHANGE_NAME',payload:'JAY'});
store.dispatch({type:'CHANGE_AGE',payload:25});

store.dispatch((dispatch)=>{
	dispatch({type:'FETCHING'});

	setTimeout(()=>{
		dispatch({type:'FETCHED', payload:{name:'Anup',age:30}});
	}, 1000);
});