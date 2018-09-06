import React, {Component} from 'react'
import ReactDom from 'react-dom'

class App extends Component{
	constructor(props){
		super(props)
		this.moveHandler = this.moveHandler.bind(this)
	}
	moveHandler(event){
		let {pageX,pageY,screenX,screenY,timeStamp,type,clientX,clientY} = event
		/*console.log(event)
		console.log(event.target)
		console.log('event.pageX',event.pageX)
		console.log('event.pageY',event.pageY)
		console.log('event.screenX',event.screenX)
		console.log('event.screenY',event.screenY)
		console.log('event.timeStamp',event.timeStamp)
		console.log('event.detail',event.detail)
		console.log('event.type',event.type)*/

		let payload = {pageX,pageY,screenX,screenY,timeStamp,type,clientY,clientX}
		console.log(payload) 
	}

	componentDidMount(){
		/*console.log(window.location.href)
		console.log(window.navigator)
		console.log(window.navigator.userAgent)
		console.log(window.navigator.appName)
		console.log(window.navigator.appCodeName)
		console.log(window.navigator.platform)
		console.log(window.navigator.appVersion)
		console.log(window.navigator.vendor)*/
		let url = window.location.href;
		let userAgent = window.navigator.userAgent
		let appName = window.navigator.appName
		let appCodeName = window.navigator.appCodeName
		let appVersion = window.navigator.appVersion
		let platform = window.navigator.platform
		let vendor = window.navigator.vendor

		let payload = {
			url,userAgent,appVersion,appName,appCodeName,platform,vendor
		}

		console.log(payload)
	}

	render(){
		
		return(
			<div className="container" onMouseMove={(e) => this.moveHandler(e)}>
				<h2>Testt</h2>
			</div>
		)
	}
}

ReactDom.render(<App />,document.getElementById('root'))

