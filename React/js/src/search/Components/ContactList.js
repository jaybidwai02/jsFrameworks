import React, { Component, PropTypes } from 'react';

import ContactListItem from './ContactList/ContactListItem';

export default class ContactList extends Component{
	componentWillReceiveProps(){
		console.log('I am receiving props...');
	}
	render(){

		let filteredArr = this.props.contacts.filter((contact)=>{
			return contact.name.toLowerCase().indexOf(this.props.filterText.toLowerCase()) != -1;
		});

		let contactItem = filteredArr.map((contact, index)=>{
			return <ContactListItem key={index} name={contact.name} age={contact.age}/>
		});

		return(
			<div className="contactList">
				<ul>
					{contactItem}
				</ul>
			</div>
		)
	}
}

ContactList.propTypes = {
	contacts: PropTypes.arrayOf(PropTypes.object)
} 