import React, { Component } from 'react';

import axios from '../axios-players.js';


class QbOne extends Component {
	
	componentDidMount() {
		axios.get('/users.json')
			.then(res => {
				console.log(res.data);
			})
	}

	render() {
		return (
			// <Players />
			<p>i</p>
		)
	}
}

export default QbOne;