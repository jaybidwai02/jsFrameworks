import React from 'react'
export const Link = ({
	active,
	children,
	onFilterClick
}) => {  
	if(active) return (<span>{children}</span>)
	return (
		<a href="javascript:void(0)"
		 onClick={onFilterClick}
		>{children}</a>
	)
}