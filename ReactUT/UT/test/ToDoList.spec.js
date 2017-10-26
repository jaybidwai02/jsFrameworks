import React, {Component} from 'react'
import TodoList from '../src/component/TodoList'
import ToDoItem from '../src/component/ToDoItem'

describe('TodoList', () => {

	const wrapper = mount(<TodoList todos={[{todo:'item1'}]}/>)
	it("should call it's componentDidMount lifecycle method", () => {
		spy(TodoList.prototype,'componentDidMount')
		// wrapper.setProps({todos:[{todo:'item1'}]})
		expect(TodoList.prototype.componentDidMount.calledOnce).to.be.ture
		TodoList.prototype.componentDidMount.restore()
	})

	it('should have props todos to render todo', () => {
		// const wrapper = shallow(<TodoList todos={[{todo:'item1'}]}/>)
		expect(wrapper.props().todos).to.be.defined
	})

	it('should render ToDoItem', () => {
		const wrapper = mount(<TodoList todos={[{todo:'item'},{todo:'item'}]}/>)
		// wrapper.find(ToDoItem).dive()
		const divs = wrapper.find('div')

		expect(divs).to.have.length(1)

		const wrapperDiv = divs.first()
		expect(wrapperDiv.children()).to.eql(wrapper.children())
		/*console.log(wrapper.find('div').find('ToDoItem').length);
		console.log(wrapper.find('div').find('ToDoItem').debug());
		console.log(wrapper.debug());*/
		expect(wrapper.find('div').find('ToDoItem')).to.have.length(2)


	})
 
	/*it('contains everything else that renderd', () => {

	})*/

})