import React, { Component, PropTypes } from 'react';

import SearchBar from './SearchApp/SearchBar';
import ContactList from './ContactList';

export default class SearchApp extends Component{
	constructor(){
		super();
		this.state = {
			filterText : 'Jay'
		}
	}

	updateState(filterText){
		this.setState({filterText});
	}

	render(){
		return(
			<div className="searchApp">
				<SearchBar filterText={this.state.filterText} updateState={this.updateState.bind(this)}/>
				<ContactList contacts={this.props.contacts} filterText={this.state.filterText}/>
			</div>
		)
	}
}

SearchApp.propTypes = {
	contacts: PropTypes.arrayOf(PropTypes.object)
}