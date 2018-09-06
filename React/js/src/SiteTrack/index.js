import React, {Component} from 'react'
import ReactDom from 'react-dom'
import axios from 'axios'


import SiteChart from './siteChart'

class App extends Component{
	constructor(props){
		super(props)
		this.moveHandler = this.moveHandler.bind(this)
		this.storage = []
		this.interval = null
		this.interval = null
		this.startInterval = this.startInterval.bind(this)
		this.stopInterval = this.stopInterval.bind(this)
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

		var viewPortWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
		var viewPortHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
		let payload = {pageX,pageY,screenX,screenY,timeStamp,eventType:type,clientY,clientX,viewPortWidth,viewPortHeight}
		this.storage.push(payload)
		/*console.log(payload) 
		console.log(this.storage) */

		this.startInterval()
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
		let latitude = window.navigator.geolocation.latitude
		let loadTime;
		let payload = {
			url,userAgent,appVersion,appName,appCodeName,platform,vendor
		}

		console.log(payload)


		window.addEventListener('load',function(){
			loadTime = Date.now() - window.startTime
			console.log('loadTime')
			console.log(loadTime/1000)
		})

		let allSections = document.querySelectorAll('section')

		allSections.forEach((item,index) => {
			let timeSpent = 0;
			console.log(item)
			item.addEventListener('mouseenter',(event) => {
				console.log(event)
				timeSpent = Date.now()
			})
			item.addEventListener('mouseleave',(event) => {
				this.startInterval()
				console.log(event)
				var viewPortWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
				var viewPortHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
				let {pageX,pageY,screenX,screenY,timeStamp,eventType:type,clientX,clientY} = event
				timeSpent = Date.now() - timeSpent
				let sectionName = event.target.id
				// console.log(sectionName)
				let payload = {pageX,pageY,screenX,screenY,timeStamp,type,clientY,clientX,timeSpent,sectionName,viewPortWidth,viewPortHeight}
				this.storage.push(payload)
				console.log('payload')
				console.log(payload)
			})
		})

		
	}
	stopInterval(){
		clearInterval(this.interval)
	}
	startInterval(){
		// console.log('in')
		if(this.interval) return
		// console.log('start')
		this.interval = setInterval(()=>{
			this.stopInterval()
			this.interval = null
			axios.post('submit',this.storage)
			this.storage = []
		},5000)
	}

	render(){
		
		return(
			<div className="container" onMouseMove={(e) => this.moveHandler(e)} onClick={(e) => this.moveHandler(e)}>
				<h2>Testt</h2>
				<SiteChart />
			</div>
		)
	}
}

ReactDom.render(<App />,document.getElementById('root'))

