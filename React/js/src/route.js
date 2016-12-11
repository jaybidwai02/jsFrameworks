import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import App from './Route/Component/App.js';
import Menu from './Route/Component/Menu.js';
import Contact from './Route/Component/Contact.js';

ReactDom.render(
	<Router history={hashHistory}>
		<Route path="/" component={App}>
			<Route path="menu" component={Menu} />
			<Route path="contact" component={Contact} />
		</Route>
	</Router>
	,document.getElementById('root'));