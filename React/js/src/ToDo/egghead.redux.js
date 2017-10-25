import React from 'react';
import ReactDom from 'react-dom'
import { createStore } from 'redux'

const counter = (state = 0, action) =>{
console.log(action.type)
	switch(action.type){
		case "INC":
			return state + 1;
			break;
		case "DEC":
			return state - 1;
			break
		default:
			return state
	}

}

/*var res = counter(0,{type:'INC'})
console.log(res)
var res = counter(1,{type:'INC'})
console.log(res)
var res = counter(2,{type:'DEC'})
console.log(res)
var res = counter(1,{type:'DECC'})
console.log(res)
var res = counter(undefined,{})
console.log(res)*/

const Counter = ({
	value,
	onInc,
	onDec
}) =>{
	return (
		<div>
			<h1>{value}</h1>
			<button onClick={onInc}>INC</button>
			<button onClick={onDec}>DEC</button>
		</div>
	)
}

const store = createStore(counter);

const render = () => {
	// console.log(store.getState())
	ReactDom.render(<Counter  
		value={store.getState()}
		onInc = {() => {
				store.dispatch({type:'INC'})
			}
		}
		onDec = {() => {
				store.dispatch({type:'DEC'})
			}
		}
	/>, document.getElementById('root'))
	
}

store.subscribe(render)
render()

/*document.addEventListener('click', ()=> {
	store.dispatch({type:"INC"})
})*/

/*var add = (a) => {
	console.log(a)

	return [...a, 10]
}
var data = [1,2,3,4];
Object.freeze(data)
var res = add(data)
console.log(res)*/
/*var remove = (a, index) => {
	console.log(a)

	// return a.slice(0,index).concat(a.slice(index+1))
	// return [...a.slice(0,index), ...a.slice(index+1)]
}
var data = [1,2,3,4];
Object.freeze(data)
var res = remove(data, 2)
console.log(res)*/

