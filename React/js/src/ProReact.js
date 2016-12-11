import React, { Component } from 'react';
import ReactDom from 'react-dom';

import List from './ProReact/List';

let itemArr = [
	{
		name:'Jay',
		age:2549
	},
	{
		name:'Soham',
		age:263
	}
];

class App extends Component{
	constructor(){
		super();
		this.state = {
			showList:false,
			inpVal:"value"
		}
	}
	toggelList(){
		this.setState({
			showList: !this.state.showList
		})
	}

	handelChange(event){
		this.setState({inpVal:event.target.value});
	}

	handelClick(event){
		this.refs.fname.focus();
	}
	render(){
		let myList;
		let classState;
		if(this.state.showList){
			myList = (<List itemArr={itemArr} />);
			classState = "open";
		}else{
			classState = "closed";
		}

		let h1Style = {
			fontSize:20,
			color:"red",
			marginTop:50
		}

		return(
			<div>
				<h1 style={h1Style} className={classState} onClick={this.toggelList.bind(this)}>Hi This Is App</h1>
				<input ref="fname" type="text" value={this.state.inpVal} onChange={this.handelChange.bind(this)}/>
				<input type="text" defaultValue="It can change"/>
				<textareaa value={this.state.inpVal} onChange={this.handelChange.bind(this)}></textareaa>
				<select name="" id="" value="B">
					<option value="A">A</option>
					<option value="B">B</option>
				</select>
				<button onClick={this.handelClick.bind(this)}>Click</button>
				{myList}
			</div>
		)
	}
}

ReactDom.render(<App />,document.getElementById('root'));