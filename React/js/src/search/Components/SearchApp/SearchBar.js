import React, { Component } from 'react';

export default class SearchBar extends Component{

	handleOnChange(event){
		this.props.updateState(event.target.value);
	}

	render(){

		let serachBarStyle = {
			display:'block',
			marginTop:'10px',
			marginBottom:10
		}

		return(
			<div className="searchBar">
				<label style={serachBarStyle}>Type Your Query</label>
				<input type="text" value={this.props.filterText} onChange={this.handleOnChange.bind(this)}/>
			</div>
		)
	}
} 