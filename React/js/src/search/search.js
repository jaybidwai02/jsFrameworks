import React, {Component} from 'react';
import ReactDom from 'react-dom';

import SearchApp from './Components/SearchApp'

var search = document.getElementById("search");

let contacts = [
	{
		name:'Jay',
		age:25
	},
	{
		name:'Anup',
		age:30
	}
]

ReactDom.render(<SearchApp contacts={contacts}/>, search);