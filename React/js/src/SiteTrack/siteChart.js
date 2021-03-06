import React, {Component} from 'react'
import Chart from 'react-d3-core'
// import {LineChart} from 'react-d3-basic'
import {BarChart,PieChart,AreaChart,LineChart} from 'react-d3-components'
import {LineTooltip, PieTooltip} from 'react-d3-tooltip'

export default class SiteChart extends Component{
	constructor(props){
		super(props)
		this.renderLineChart = this.renderLineChart.bind(this)
	}

	renderLineChart(){
		var chartData = [
  {
    name: "Lavon Hilll I",
    BMI: 20.57,
    age: 12,
    birthday: "1994-10-26T00:00:00.000Z",
    city: "Annatown",
    married: true,
    index: 1
  },
  {
    name: "Clovis Pagac",
    BMI: 24.28,
    age: 26,
    birthday: "1995-11-10T00:00:00.000Z",
    city: "South Eldredtown",
    married: false,
    index: 3
  },
  {
    name: "Gaylord Paucek",
    BMI: 24.41,
    age: 30,
    birthday: "1975-06-12T00:00:00.000Z",
    city: "Koeppchester",
    married: true,
    index: 5
  },
  {
    name: "Ashlynn Kuhn MD",
    BMI: 23.77,
    age: 32,
    birthday: "1985-08-09T00:00:00.000Z",
    city: "West Josiemouth",
    married: false,
    index: 6
  },
			]
		var width = 700,
		    height = 300,
		    margins = {left: 100, right: 100, top: 50, bottom: 50},
		    title = "User sample",
		    // chart series,
		    // field: is what field your data want to be selected
		    // name: the name of the field that display in legend
		    // color: what color is the line
		    chartSeries = [
		      {
		        field: 'BMI',
		        name: 'BMI',
		        color: '#ff7f0e'
		      }
		    ],
		    // your x accessor
		    x = function(d) {
		      return d.index;
		    };

		    return(
		    	<div>
		    	<LineTooltip
		    	        margins= {margins}
		    	        title={title}
		    	        data={chartData}
		    	        width={width}
		    	        height={height}
		    	        chartSeries={chartSeries}
		    	        x={x}
		    	      />
		    	</div>
		    )
	}

	renderChart(){
		var data = [{
		    label: 'Browsers',
		    values: [
			    {x: 'Chrome', y: 70},
			    {x: 'IE', y: 20}, 
			    {x: 'Safari', y: 10},
			    {x: 'Mozila', y: 1}
		    ]
		}];

		return(
			<section id="barChart" className="charts">
			<BarChart
			       data={data}
			       width={400}
			       height={400}
			       margin={{top: 10, bottom: 50, left: 50, right: 10}}/>
			</section>
		)
	}

	renderPieChart(){
		var width = 500,
    height = 300,
    title = "Pie Chart With Tooltip",
    // value accessor
    value = function(d) {
      return +d.population;
    },
    // name accessor
    name = function(d) {
      return d.age;
    },
    // field means what your input field name is,
    // name means the name show in the legend in your chart.
    chartSeries = [
      {
        "field": "<5",
        "name": "less than 5"
      },
      {
        "field": "5-13",
        "name": "5 to 13"
      },
      {
        "field": "14-17",
        "name": "14 to 17"
      },
      {
        "field": "18-24",
        "name": "18 to 24"
      },
      {
        "field": "25-44",
        "name": "25 to 44"
      },
      {
        "field": "45-64",
        "name": "45 to 64"
      }
    ];

		return(
			<section id="PieChart" className="charts">
						<PieTooltip
			                
			                width={600}
			                height={400}
			                margin={{top: 10, bottom: 10, left: 100, right: 100}}
			                sort={null}
			              />
			</section>
			
		)
	}

	renderMulChart(){
		var data = [
			    {
			    label: 'somethingA',
			    values: [{x: 0, y: 2}, {x: 1.3, y: 5}, {x: 3, y: 6}, {x: 3.5, y: 6.5}, {x: 4, y: 6}, {x: 4.5, y: 6}, {x: 5, y: 7}, {x: 5.5, y: 8}]
			    },
			    {
			    label: 'somethingB',
			    values: [{x: 0, y: 3}, {x: 1.3, y: 4}, {x: 3, y: 7}, {x: 3.5, y: 8}, {x: 4, y: 7}, {x: 4.5, y: 7}, {x: 5, y: 7.8}, {x: 5.5, y: 9}]
			    }
			];

			return(
				<div>
					<LineTooltip
		                data={data}
		                width={400}
		                height={400}
		                margin={{top: 10, bottom: 50, left: 50, right: 10}}/>

		            <AreaChart
	                    data={data}
	                    width={400}
	                    height={400}
	                    yOrientation='right' // if you do not provide right default left orientation for yAxis will be used
	                    margin={{top: 10, bottom: 50, left: 50, right: 10}}/>




				</div>
			)
	}

	render(){
		/*{this.renderPieChart()}
					{this.renderMulChart()}*/
		return(
			<div>
				<section id="chart">
					{this.renderChart()}
					{this.renderPieChart()}	
									
				</section>				
			</div>
		)
	}
}