import React, { Component } from 'react';
import BFInput from './bf-input.js';
import BFOutput from './bf-output.js';
import './bf-runner.css';

class BFRunner extends Component {
	constructor(props) {
		super(props);
		this.state = {
			program: '>++++++++[-<+++++++++>]<.>>+>-[+]++>++>+++[>[->+++<<+++>]<<]>-----.>->+++..+++.>-.<<+[>[+>+]>>]<--------------.>>.+++.------.--------.>+.>+.'
		};
	}

	handleExecuteRequest = (input) => {
		this.setState({
			program: input
		});
	}
	
	render() {
		return (
			<div className='bf-runner'>
				<h1>Run a BF program</h1>

				<div className='bf-runner-flexbox'>
					<BFInput program={this.state.program} onExecuteRequest={this.handleExecuteRequest} />
					<BFOutput program={this.state.program}/>
				</div>
			</div>
		);
	};
}

export default BFRunner;
