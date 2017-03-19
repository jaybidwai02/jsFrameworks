import React, { Component } from 'react';
import ReactDom from 'react-dom';
import {Link} from 'react-router';

import Task from './Task';

export class Test extends Component{
	constructor(){
		super();
		this.state = {
			name:'Anup',
			age:28
		}
	}

	changeName(name){
		this.setState({name, age:25});
	}

	biodata(){
		return "My name is " + this.state.name + " and I am "+ this.state.age + "years old";
	}

	render(){

		/*setTimeout(() =>{
			this.setState({name:'Jay',age:25});
		},2000)*/

		var name = this.biodata();	

		//console.log(this.props)	

		return(
			<div>
				<h1>{name}</h1>

				<Task  changeName={this.changeName.bind(this)}/>

				<h1>This is route</h1>	

				<Link to="home/abc">Home</Link>
				<Link to="contact"> Contact </Link>
				{this.props.children}			
				
			</div>
		)
	}

}

