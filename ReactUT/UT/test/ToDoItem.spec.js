import React from 'react'
import ToDoItem from '../src/component/ToDoItem'

describe('ToDoItem', () => {
	const wrapper = shallow(<ToDoItem />)

	it('should be list item', () => {
		expect(wrapper.type()).to.eql('li')
	})

	it('should render custom item text', () => {
		wrapper.setProps({todo:'item1'})
		expect(wrapper.contains('item1')).to.equal(true)
	})

	it('should have className todo-item', () => {
		expect(wrapper.find('.todo-item')).to.have.length(1)
	})
});