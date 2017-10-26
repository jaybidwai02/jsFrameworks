import React, { Component } from 'react';
import ReactDom from 'react-dom';
import TodoList from 'component/TodoList'
/*var a = 110;
alert(10000)*/

ReactDom.render(<TodoList todos={[{todo:'item1'}]}/>, document.getElementById('root'))