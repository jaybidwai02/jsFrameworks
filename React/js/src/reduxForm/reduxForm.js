import React from 'react'
import ReactDom from 'react-dom'
import {createStore,compose} from 'redux'
import {Provider} from 'react-redux'

import appReducer from './reducers/reducer'

import App from './component/App'

const enhancer =  compose(
	window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__ : f => f
)
const initialValues = {
	firstName: 'jay',
	lastName: 'Bidwai',
	email: 'abc@abc.com',
	province: 'USA'
}
const show = (data) => {
	alert('in')
}
const store = createStore(appReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
ReactDom.render(
	<Provider store={store}>
		<App initialValues={initialValues} show={show}/>
	</Provider>,
	document.getElementById('root')
)


