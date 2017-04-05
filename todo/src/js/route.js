import React, { Component } from 'react';
import { Route, Router, IndexRoute, hashHistory } from 'react-router';

import ToDoApp from './component/ToDoApp';
import Completed from './component/ToDoApp/completed';

export default (
	<Route path="/" component={ToDoApp} initialState={appData}>
		<Route path="/completed" component={Completed} />
	</Route>
)