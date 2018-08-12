import React, { Component } from 'react'
import {connect} from 'react-redux'

import loadUser from '../actions/userAction'

class Layout extends Component{
	constructor(props){
		super(props)
	}

	handleClick(){
		this.props.onClick()
	}

	render(){
		console.log(this.props)
		const {user} = this.props
		if(!user.list.length){
			return <button onClick={this.handleClick.bind(this)}>Load Data</button>
		}
		return(
			<ul>
				{ user.list.map((val,i) => {
						return (<li key={i}>{val.name}</li>)
					})
				}
			</ul>			
		)
	}
}

const mapStateToPops = (state) => {
	return{
		user:state.users
	}
}

const mapDispatchToProps = (dispatch) => {
	return{
		onClick:() => {
			dispatch(loadUser(dispatch))
		}
	}
}

Layout = connect(
	mapStateToPops,
	mapDispatchToProps
)(Layout)

export default Layout