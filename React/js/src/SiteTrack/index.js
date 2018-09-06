import React, {Component} from 'react'
import ReactDom from 'react-dom'
import axios from 'axios'

import $ from "jquery";
import bowser from 'bowser'

import { Button,ButtonToolbar } from 'react-bootstrap';



import SiteChart from './siteChart'
import BootCarousel from './carousel'
import TextEntry from './TextEntry'

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
		let parentSection = $(event.target).parents('section').attr('id')  ||  $(event.target).parents('section').attr('class')
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
		let domainName = window.location.hostname;
		let url = window.location.href;
		let payload = {pageX,pageY,screenX,screenY,timeStamp,eventType:type,clientY,clientX,viewPortWidth,viewPortHeight,domainName,url,parentSection}
		this.storage.push(payload)
		// console.log(payload) 

		/*console.log(this.storage) */

		this.startInterval()
	}

	componentDidMount(){
		const browserPlugin = bowser.getParser(window.navigator.userAgent);
		 
		const browserInfo = browserPlugin.parse()
		const {parsedResult} = browserInfo
		console.log(browserInfo)
		let {browser,os,platform} = parsedResult
		let {name:browserName,version:browserVersion} = browser
		let {name:osName,versionName:osVersion} = os
		let {type:deviceType} = platform
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
		// let platform = window.navigator.platform
		let vendor = window.navigator.vendor
		let latitude = window.navigator.geolocation.latitude
		let domainName = window.location.hostname
		let loadTime;
		


		window.addEventListener('load',function(){
			loadTime = Date.now() - window.startTime
			console.log('loadTime')
			console.log(loadTime/1000)
			loadTime = loadTime/1000

			let payload = {
				url,userAgent,appVersion,appName,appCodeName,vendor,domainName,browserName,browserVersion,osName,osVersion,deviceType,loadTime
			}

			console.log(payload)

			loadTime = 0;
		})

		// window.addEventListener('mousemove',this.moveHandler)
		window.addEventListener('click',this.moveHandler)

		let allSections = document.querySelectorAll('section')

		allSections.forEach((item,index) => {
			let timeSpent = 0;
			// console.log(item)
			item.addEventListener('mouseenter',(event) => {
				// console.log(event)
				timeSpent = Date.now()
			})
			item.addEventListener('mouseleave',(event) => {
				this.startInterval()
				// console.log(event)
				var viewPortWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
				var viewPortHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
				let {pageX,pageY,screenX,screenY,timeStamp,eventType:type,clientX,clientY} = event
				timeSpent = Date.now() - timeSpent
				let sectionName = event.target.id

				// console.log(sectionName)
				let payload = {pageX,pageY,screenX,screenY,timeStamp,type,clientY,clientX,timeSpent,sectionName,viewPortWidth,viewPortHeight}
				this.storage.push(payload)
				// console.log('payload')
				// console.log(payload)
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
			<div className="container">
				<h2>Demo</h2>

				<BootCarousel />

				<TextEntry />

				<SiteChart />

				<ButtonToolbar>
				  {/* Standard button */}
				  <Button>Default</Button>

				  {/* Provides extra visual weight and identifies the primary action in a set of buttons */}
				  <Button bsStyle="primary">Primary</Button>

				  {/* Indicates a successful or positive action */}
				  <Button bsStyle="success">Success</Button>

				  {/* Contextual button for informational alert messages */}
				  <Button bsStyle="info">Info</Button>

				  {/* Indicates caution should be taken with this action */}
				  <Button bsStyle="warning">Warning</Button>

				  {/* Indicates a dangerous or potentially negative action */}
				  <Button bsStyle="danger">Danger</Button>

				  {/* Deemphasize a button by making it look like a link while maintaining button behavior */}
				  <Button bsStyle="link">Link</Button>
				</ButtonToolbar>;


				
			</div>
		)
	}
}

ReactDom.render(<App />,document.getElementById('root'))

