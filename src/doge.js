import React, { Component } from 'react';
import dogo from './doge.jpeg';
import './doge.css';

function DogeMeme(props) {
	return(
		<div classname='DogeMeme'>
		<div class="background">
		<div>
		<h3>{props.top}</h3>
		</div>
		<div class="center">
		</div>
		<div>
		<h3 class="bot">{props.bottom}</h3>
		</div>
		</div>
		</div>
	);
}

export default DogeMeme;