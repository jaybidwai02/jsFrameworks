import React,{Component} from 'react'

const buttonStyle = {
	height:'50px',
	padding:'10px',
	float:'left',
	border:'none',
	width:'30%',
	marginRight:'1%',
	fontSize:'16px'
}

export default (props) =>{
		return(
			<button 
			style={buttonStyle}
			className='square'
			onClick={props.onClick}>{props.value}</button>
		)
}