import React, { Component } from 'react';
import ReactDom from 'react-dom';

// Component's
import AppComponent from './component/AppComponent'



const appRoot = document.getElementById('root');

ReactDom.render(<AppComponent />, appRoot)