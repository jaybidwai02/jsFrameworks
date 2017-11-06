import React from 'react'

export const ToDo = ({
	onClick,
	onEdit,
	completed,
	task,
	priority
}) => (
	<li 
		
		style={{textDecoration: completed ? 'line-through' : 'none'}}
	>		
		<a href="javascript:void(0)" onClick={onClick}>{task}</a>{' '}
		<a href="javascript:void(0)" >{priority}</a>{' '}
		<a href="javascript:void(0)" onClick={onEdit}>Edit</a>
	</li>
)