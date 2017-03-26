import React, {Component} from 'react';
import ReactDom from 'react-dom';

import CountStoreObj from './flux/store/countStore';
import * as CountActions from './flux/actions/countActions';

class App extends Component{
	constructor(){
		super();
		this.state = {
			count : CountStoreObj.getData()
		}
	}

	increment(){
		let {count} = this.state;
		CountActions.incrementCount(count + 1);
	}

	decrement(){
		let {count} = this.state;
		CountActions.decrementCount(count - 1);
	}

	componentDidMount(){
		CountStoreObj.on('change', ()=>{
			this.setState({
				count: CountStoreObj.getData()
			});
		})
	}

	render(){
		return(
			<div>
				<h2>{this.state.count}</h2>
				<button onClick={this.increment.bind(this)}>Inc</button>
				<button onClick={this.decrement.bind(this)}>DEC</button>
			</div>
		)
	}
}

var app = document.getElementById('test');

ReactDom.render(<App />, app);