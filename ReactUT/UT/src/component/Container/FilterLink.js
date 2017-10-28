import React from 'react'
import {connect} from 'react-redux'

import {Link} from '../Presentational/Link'
import * as action from 'action/action'

const mapStateToFilterLinkProps = (state, props) => {
	return {
		active:props.filter == state.visibilityFilter,
	}
}

const mapDispatchToFilterLinkProps = (dispatch, props) => {
	return {
		onFilterClick: ()=>
		dispatch(action.setVisibilityFilter(props.filter))
	}
}
		
export const FilterLink = connect(
	mapStateToFilterLinkProps,
	mapDispatchToFilterLinkProps
)(Link)	