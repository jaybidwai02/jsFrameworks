import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import App from './Route/Component/App.js';
import Home from './Route/Component/Home.js';
import Menu from './Route/Component/Menu.js';
import Contact from './Route/Component/Contact.js';

ReactDom.render(
	<Router history={hashHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={Home} />
			<Route path="menu(/:routePara)" component={Menu} titel={"this is addistion prop"}/>
			<Route path="contact" component={Contact} />
		</Route>
	</Router>
	,document.getElementById('root'));