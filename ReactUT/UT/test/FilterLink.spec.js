// import React from 'react'
import {Provider} from 'react-redux'
// import {Footer} from '../src/component/Presentational/Footer'
import {FilterLink} from '../src/component/Container/FilterLink'
import {Link} from '../src/component/Presentational/Link'


describe('FilterLink', () => {
		

	const wrapper = mount( <FilterLink store={store} /> )

	it('should render Link', () => {
		expect(wrapper.find('Link')).to.have.length(1)
	})

	it('should recive filter props', () => {
		wrapper.setProps({filter:"SHOW_ALL"});
		expect(wrapper.props().filter).to.equal('SHOW_ALL')
	})


});

