import React from 'react'
import {FilterLink} from '../Container/FilterLink'
export const Footer = () => (
	<div>
		show:{' '}
		<FilterLink filter="SHOW_ALL" > All </FilterLink>
		<FilterLink filter="SHOW_ACTIVE" > Active </FilterLink>
		<FilterLink filter="SHOW_COMPLETED" > Completed </FilterLink>
	</div>
)