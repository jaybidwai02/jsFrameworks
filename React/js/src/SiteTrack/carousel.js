import React,{Component} from 'react'
import {Carousel} from 'react-bootstrap';

export default class BootstrapCar extends Component{
	constructor(props){
		super(props)
	}

	render(){
		return(
			<section id="carousel" className="carousel">
			<Carousel>
			  <Carousel.Item>
			    <img width={400} height={300} alt="400x300" src="/UBS.jpg" />
			    <Carousel.Caption>
			      <h3>First slide label</h3>
			      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
			    </Carousel.Caption>
			  </Carousel.Item>
			  <Carousel.Item>
			    <img width={400} height={300} alt="400x300" src="/UBS1.jpg" />
			    <Carousel.Caption>
			      <h3>Second slide label</h3>
			      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
			    </Carousel.Caption>
			  </Carousel.Item>
			  <Carousel.Item>
			    <img width={400} height={300} alt="400x300" src="/UBS.jpg" />
			    <Carousel.Caption>
			      <h3>Third slide label</h3>
			      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
			    </Carousel.Caption>
			  </Carousel.Item>
			</Carousel>
			</section>
		)
	}
}