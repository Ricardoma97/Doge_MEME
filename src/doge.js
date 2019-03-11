import React, { Component } from 'react';
import dogo from './doge.jpeg';
import './doge.css';



class DogeMeme extends React.Component {
	constructor(props){
		super(props);
		this.state={
			top:"Hardcoded",
			bot:"Meme"
		}
	 this.handleChange1 = this.handleChange1.bind(this);
	 this.handleChange2 = this.handleChange2.bind(this);
	}
	handleChange1(event){
	this.setState({top:event.target.value})
	}

	handleChange2(event){
	
	this.setState({bot:event.target.value})
	}

	render(){return(
		<div classname='DogeMeme'>
		<form>
		<input type="text" name="top" value={this.state.top} onChange={this.handleChange1}/>
		<input type="text" name="bot" value={this.state.bot} onChange={this.handleChange2}/>
		</form>
		<div class="background">
		<div>
		<h3>{this.state.top}</h3>
		</div>
		<div class="center">
		</div>
		<div>
		<h3>{this.state.bot}</h3>
		</div>
		</div>
		</div>
	);
	}
}

export default DogeMeme;