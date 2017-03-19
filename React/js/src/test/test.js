import React, {Component} from 'react';
import ReactDom from 'react-dom';
import {Router, Route, Link, hashHistory, IndexRoute } from 'react-router';

import { Test, Search } from './Components/Test';
import Menu from './Components/Home';
import Contact from './Components/Contact';

var test = document.getElementById('test');

//var search = document.getElementById("search");

ReactDom.render(
	<Router history = {hashHistory}>
		<Route path='/' component={Test}>
			<IndexRoute component={Menu}></IndexRoute>
			<Route path='/home(/:para)' component={Menu}></Route>
			<Route path='/contact' component={Contact}></Route>
		</Route>
	</Router>
	, test);
//ReactDom.render(<Search />, test);