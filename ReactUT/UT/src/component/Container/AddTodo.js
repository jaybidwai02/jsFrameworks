import React from 'react'
import {connect} from 'react-redux'

import * as action from 'action/action'

export let AddTodo = ({ dispatch }) =>{
	let input;
	return (
		<div>
			<input type="text" ref={node => {input = node} } />
			<button onClick={() => {
				if(!input.value) return
				dispatch(action.addTodo(input.value))
				input.value = ''
				
			}}>Add Task</button>
		</div>
	)
}
AddTodo = connect()(AddTodo)

// export AddTodo