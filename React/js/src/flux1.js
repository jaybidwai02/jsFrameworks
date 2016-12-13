import React, {Component} from 'react';
import ReactDom from 'react-dom';

import countAction from './Flux/Actions/updateCount';
import countStore from './Flux/Stores/countStore';

class App extends Component{
	constructor(){
		super()
		this.state = {
			count: countStore.getCount()
		}
	}
	updateCount(){
		countAction.updateCount(this.state.count);
	}

	decCount(){
		countAction.decrementCount(this.state.count);
	}

	componentWillMount() {
		countStore.on('update',()=>{
			this.setState({
				count:countStore.getCount()
			})
		})
	}
	render(){
		const {count} = this.state;
		return(
			<div>
				<h1>{count}</h1>
				<button onClick={this.updateCount.bind(this)}>INC</button>
				<button onClick={this.decCount.bind(this)}>DEC</button>
			</div>
		)
	}
}

ReactDom.render(<App />, document.getElementById("root"));