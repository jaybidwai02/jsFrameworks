import React from 'react'
import { expect } from 'chai';
import { sinon, spy } from 'sinon';
import { mount, render, shallow } from 'enzyme';

const store={
	subscribe:()=>{},
	getState:()=>{
		return {
			visibilityFilter:'',
			todos:[]
		}
	}
}

global.expect = expect;
global.sinon = sinon;
global.spy = spy;

global.mount = mount;
global.render = render;
global.shallow = shallow;
global.React = React;

global.store = store