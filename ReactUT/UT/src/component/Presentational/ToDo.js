import React from 'react'

export const ToDo = ({
	onClick,
	completed,
	text
}) => (
	<li 
		onClick={onClick}
		style={{textDecoration: completed ? 'line-through' : 'none'}}
	>
		{text}
	</li>
)