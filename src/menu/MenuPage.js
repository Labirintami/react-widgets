
import React, { Component } from 'react'
import Menu from './Menu';
import MenuCdn from './MenuCdn';

import MenuConfigured from './MenuConfigured';
import MenuProps from './MenuProps';
import MenuData from './MenuData';

export default class MenuPage extends Component {

	componentDidMount() {
		this.props.handleToolbarNavItems([...this.el.querySelectorAll('section')].map(item => item.id))
	}
	handleAnchorClick(e, id) {
		e.preventDefault()
		this.props.setActiveExapmle(id)
	}
	render() {
		return (
			<main ref={(el) => this.el = el}>
				<section className="hgroup active" id="basic">
					<h3>
						NPM basic inintialization 
						<a href="#basic" className="anchor" onClick={(e) => this.handleAnchorClick(e, 'basic')}>
							<img src="/static/link.svg" alt="" />
						</a>
					</h3>
					<p>
						<a href="https://github.com/DHTMLX/react-widgets/blob/master/src/menu/Menu.js" target="_blank"  rel="noopener noreferrer" >Code example </a> 
					</p>
					<div style={{display: 'flex', justifyContent: 'center'}}>
						<Menu /> 
					</div>
				</section>
				<section className="hgroup" id="cdn">
					<h3>
						CDN basic inintialization 
						<a href="#cdn" className="anchor" onClick={(e) => this.handleAnchorClick(e, 'cdn')}>
							<img src="/static/link.svg" alt="" />
						</a>
					</h3>
					<p>
						<a href="https://github.com/DHTMLX/react-widgets/blob/master/src/menu/MenuCDN.js" target="_blank"  rel="noopener noreferrer" >Code example </a> 
					</p>
					<div style={{display: 'flex', justifyContent: 'center'}}>
						<MenuCdn /> 
					</div>
					
				</section>
				<section className="hgroup" id="pre">
					<h3>
						Pre-configured component
						<a href="#pre" className="anchor" onClick={(e) => this.handleAnchorClick(e, 'pre')}>
							<img src="/static/link.svg" alt="" />
						</a>
					</h3>
					<p>
						<a href="https://github.com/DHTMLX/react-widgets/blob/master/src/menu/MenuConfigured.js" target="_blank"  rel="noopener noreferrer" >Code example </a> 
					</p>
					<div style={{display: 'flex', justifyContent: 'center'}}>
						<MenuConfigured />
					</div>
				</section>
				<section className="hgroup" id="props">
					<h3>
						Configured using props
						<a href="#props" className="anchor" onClick={(e) => this.handleAnchorClick(e, 'props')}>
							<img src="/static/link.svg" alt="" />
						</a>
					</h3>
					<p>
						<a href="https://github.com/DHTMLX/react-widgets/blob/master/src/menu/MenuProps.js" target="_blank"  rel="noopener noreferrer" >Code example </a> 
					</p>
					<div style={{display: 'flex', justifyContent: 'center'}}>
						<MenuProps />
					</div>
				</section>
				<section className="hgroup" id="data">
					<h3>
						Work with data
						<a href="#data" className="anchor" onClick={(e) => this.handleAnchorClick(e, 'data')}>
							<img src="/static/link.svg" alt="" />
						</a>
					</h3>
					<p>
						<a href="https://github.com/DHTMLX/react-widgets/blob/master/src/menu/MenuData.js" target="_blank"  rel="noopener noreferrer" >Code example </a> 
					</p>
					<div style={{display: 'flex', justifyContent: 'center'}}>
						<MenuData />
					</div>
				</section>
			</main>
		)
	}
}