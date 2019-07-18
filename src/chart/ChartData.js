import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Chart as ChartDHX, DataCollection } from "dhx-suite";

import "dhx-suite/codebase/suite.css";

class Chart extends PureComponent {
  componentDidMount() {
    let {type, scales, series, data, barWidth, maxPoints } = this.props
    this.chart = new ChartDHX(this.el, {
      type: type,
      scales: scales,
			series: series,
      maxPoints: maxPoints,
      barWidth: barWidth,
      data: data
    })
  }

  componentWillUnmount() {
    this.grid && this.grid.destructor();
  }
  render() {
    return (
      <div style={{width: '100%', maxWidth: 1350, height: '500px'}} ref={el => this.el = el}></div>
    );
  }
} 

class ChartData extends PureComponent {
  constructor(props){
    super(props)
    this.state = {
      firstItem: null,
    }
    this.data = new DataCollection()

    this.data.events.on('load', () => {
      this.setState({
        firstItem: this.data.getItem(this.data.getId(0)).month,
        itemsCount: this.data.getLength()
      })
    })

    this.data.load('./static/chart.json').then(() => {
      this.data.events.on('change', () => {
        this.setState({
          firstItem: this.data.getItem(this.data.getId(0)) ? this.data.getItem(this.data.getId(0)).month : '',
          itemsCount: this.data.getLength()
        })
      })
    })
  }

  componentWillUnmount() {
    this.data.events.detach('load')
  }
  handleRemoveItem() {
    this.data.remove(this.data.getId(0))
  }
  handleReset() {
    this.data.load('./static/chart.json')
  }
  render() {
    const scales = {
      "bottom" : {
        text: "month"
      },
      "left" : {
        maxTicks: 10,
        max: 100,
        min: 0
      }
    }
    const series = [
      {
        id: "A",
        value: "company C",
        color: "#5E83BA",
        pointType: "circle",
        fill: "#5E83BA",
        barWidth: 35
      }
    ]
    return ( 
      <div style={{width: '100%', maxWidth: 650, height: '550px'}}>
        <Chart 
          type="bar"
          scales={scales}
          series={series}
          data={this.data}
        />
        <div style={{display: 'flex', justifyContent: 'center', padding: 20}}>
          <button className="button" onClick={() => this.handleRemoveItem()} disabled={this.state.itemsCount === 0}>
            Remove {this.state.firstItem} month data
          </button>
          <button className="button" onClick={() => this.handleReset()} disabled={this.state.itemsCount !== 0}>
            Reset 
          </button>
        </div>
      </div>
    );
  }
}
Chart.propTypes = {
  type: PropTypes.oneOf([
    "bar",
    "line",
    "spline",
    "scatter",
    "area",
    "donut",
    "pie",
    "pie3D",
    "radar",
    "xbar",
    "splineArea"
  ]),
	barWidth: PropTypes.number,
	series: PropTypes.array,
	scales: PropTypes.object,
	maxPoints: PropTypes.number,
	data: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.instanceOf(DataCollection)
  ]),
};

export default ChartData;