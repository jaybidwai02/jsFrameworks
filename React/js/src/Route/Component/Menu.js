import React, {Component} from 'react';

export default class Menu extends Component{
	render(){
		console.log(this.props);
		const { route } = this.props;
		const { params } = this.props;
		const { location } = this.props;
		const { query } = location;
		return(
			<div>
				<h1>Menu {route.titel} and route parameters are { params.routePara} and query string is ({query.ab}) </h1>
			</div>
		)
	}
}