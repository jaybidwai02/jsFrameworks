import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-promise-middleware';

const reducer = (state, action)=>{
	console.log('in reducer',action);

	if(action.type == 'INC'){
		return state + action.payload
	}
	if(action.type == 'DEC'){
		return state - action.payload;
	}

	return state;
}

//create middleware
const log = (state) => (next) => (action) =>{
	console.log('action captured', action);
	action.type = 'DEC';
	next(action);
}

const middleware = applyMiddleware(log);

//const store = createStore(reducer, 0);
const store = createStore(reducer, 0, middleware);


//Multiple reducers

/*const userReducer = (state={}, action) =>{
	switch(action.type){
		case 'CHANGE_NAME':{
			state = {...state, name:action.payload}
		break;
		}
		case 'CHANGE_AGE':{
			state = {...state, age:action.payload}
		}
	}
	return state;
}

const employmentReducer = (state=[], action) =>{
	switch(action.type){
		case 'CHANGE_NAME':{
			state = state.concat(action.payload);
		break;
		}
	}
	return state;
}

const reducer = combineReducers({
	user: userReducer,
	employment: employmentReducer
})

const store = createStore(reducer);*/

store.subscribe(()=>{
	console.log('Store changed', store.getState() );
});

store.dispatch({type:'INC', payload: 1});
store.dispatch({type:'INC', payload: 10});
store.dispatch({type:'DEC', payload: 10});

/*store.dispatch({type:'CHANGE_NAME', payload: 'Jay'});
store.dispatch({type:'CHANGE_AGE', payload: '26'});*/

