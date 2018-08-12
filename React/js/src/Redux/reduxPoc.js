import React, {Component} from 'react'
import ReactDom from 'react-dom'

import { Provider } from 'react-redux'
import store from './store'

import Layout from './component/layout'

ReactDom.render(
	<Provider store={store}>
		<Layout />
	</Provider>,
	document.getElementById('root')
)