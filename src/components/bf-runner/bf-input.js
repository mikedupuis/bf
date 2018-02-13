import React, { Component } from 'react';
import './bf-input.css';

class BFInput extends Component {
	constructor(props) {
		super(props);
		this.state = {
			handleExecuteRequest: props.onExecuteRequest,
			value: props.program
		};

		this.handleChange = this.handleChange.bind(this);
		this.onExecuteRequest = this.onExecuteRequest.bind(this);
	}

	handleChange(event) {
		this.setState({value: event.target.value});
	}

	onExecuteRequest() {
		this.state.handleExecuteRequest(this.state.value);
	}
	
	render() {
		return (
			<div className='bf-element bf-input'>
				<h3>Program</h3>
				<textarea value={this.state.value} onChange={this.handleChange} />
				<br />
				<div className='btn btn-right' onClick={this.onExecuteRequest}>
					<p>Run it!</p>
				</div>
			</div>
		);
	};
}

export default BFInput;
