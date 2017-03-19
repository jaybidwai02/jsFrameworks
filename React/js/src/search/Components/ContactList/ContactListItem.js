import React, { Component, PropTypes } from 'react';

export default class ContactListItem extends Component{
	constructor(){
		super();
		console.log('I am in the constructor');
	}

	componentWillMount(){
		console.log('I am from component will mount phase');
	}

	componentDidMount(){
		console.log('I am from component did mount phase');
	}

	componentWillUnmount(){
		console.log('Component will unmount');
	}

	shouldComponentUpdate(){
		console.log('Yes it should');
		return true;
	}

	componentWillUpdate(){
		console.log('Component will update');
		console.log(this);
	}

	render(){
		return(
			<li>Name : {this.props.name} and age: {this.props.age}</li>
		)
	}
}

ContactListItem.propTypes = {
	name: PropTypes.string.isRequired,
	age: PropTypes.number.isRequired
}