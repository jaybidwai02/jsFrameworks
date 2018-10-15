import React from 'react'

import {reduxForm, Field} from 'redux-form'
import showRes from '../mockAjax'

const validate = vlaues => {
	const errors = {}
	if(!vlaues.firstName) errors.firstName = 'Required'
	if(!vlaues.lastName) errors.lastName = 'Required'
	if(!vlaues.email) errors.email = 'Required'
	if(!vlaues.province) errors.province = 'Required'
	return errors
}

const createRender = render => ({input, meta, label,...rest}) => (
	<div className={[
		meta.error && meta.touched ? 'error' : '',
		meta.active ? 'active' : ''		
	].join(' ')}>
	<pre>{JSON.stringify(meta)}</pre>
		<label>{label}</label>
		{render(input,label, rest)}
		
		{meta.error && meta.touched &&
			<span>{meta.error}</span>
		}
	</div>
)

const renderInput = createRender( (input,label) => 
	<input {...input} placeholder={label} />
)

const renderSelect = createRender( (input,label,{children}) => 
	<select {...input}>{children}</select>
)


let App = ({handleSubmit, show}) => (
	<form onSubmit={handleSubmit(show)}>
		<Field name="firstName" label="First Namee" component={renderInput} />
		<Field name="lastName" label="Last Name" component={renderInput} />
		<Field name="email" label="email" component={renderInput} />
		<Field name="province" label="province" component={renderSelect}>
		<option/>
			{
				['india','USA'].map(province => 
				<option key={province} value={province}>
				{province}
				</option>)
			}
		</Field>
		<button type="submit">submit</button>
	</form>
)

App = reduxForm({
	form:'appForm',
	validate
})(App)

export default App