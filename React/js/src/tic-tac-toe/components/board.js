import React, {Component} from 'react'

import Square from './square'
import '../css/board.css'

export default class Board extends Component{
	constructor(props){
		super(props)
		this.state = {
			squares: Array(9).fill(null),
			xIsNext:true
		}
	}

	renderSquare(i){
		return (
			<Square 
			value={this.state.squares[i]}
			onClick={this.handleClick.bind(this, i)}
			/>
		)
	}

	handleClick(i){
		//alert(i)
		const squares = this.state.squares.slice()
		squares[i] = this.state.xIsNext ? 'X' : 'O'
		this.setState({
			squares,
			xIsNext: !this.state.xIsNext
		})
	}

	render(){
		return(
			<div className="board">
				<div className="row">
					{this.renderSquare(0)}
					{this.renderSquare(1)}
					{this.renderSquare(2)}
				</div>
				<div className="row">
					{this.renderSquare(3)}
					{this.renderSquare(4)}
					{this.renderSquare(5)}
				</div>
				<div className="row">
					{this.renderSquare(6)}
					{this.renderSquare(7)}
					{this.renderSquare(8)}
				</div>
			</div>
		)
	}
}