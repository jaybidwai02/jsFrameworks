import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { spy } from 'sinon';

import App from '../js/src/reduxForm/component/App';

describe('description', function () {
	it('pass', () => {
		const initialValues = {
			firstName: 'jay',
			lastName: 'Bidwai',
			email: 'abc@abc.com',
			province: 'USA'
		}
		const show = spy();
		const wrapper = shallow(<App />);
		wrapper.find('form').simulate('submit');
		expect(show.callCount).to.equal(1)
	})
})