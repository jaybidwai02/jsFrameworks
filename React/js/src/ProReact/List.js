import React, {Component,PropTypes} from 'react';

import ListItem from './ListItem';

export default class List extends Component{
	render(){
		const listItem = this.props.itemArr.map((item, index)=>{
			return <ListItem key={index} name={item.name}
						     age={item.age} />
		})
		return(
			<div>
				<ul>
					{listItem}
					{this.props.chk}
				</ul>
			</div>
		)
	}
}

List.propTypes = {
	itemArr: PropTypes.arrayOf(PropTypes.object),
	chk: PropTypes.string
}

List.defaultProps = {
	chk: "This is default"
}