import React, { Component } from 'react';
import './bf-output.css';

class BFOutput extends Component {
	brainfuck(program) {
		var output = ''
		var data = []
		var dataPointer = 0
		var instructionPointer = 0

		for (var i = 0; i < 20; i++)
			data[i] = 0;

		while (instructionPointer !== program.length) {
			var loopDepth = 0;
			var matchFound = false;
			var instruction = program[instructionPointer]

			switch (instruction) {
				case '>':
					dataPointer++;
					instructionPointer++;
					break;

				case '<':
					dataPointer--;
					if (dataPointer < 0)
						dataPointer = 0;
					instructionPointer++;
					break;

				case '+':
					data[dataPointer] = data[dataPointer] || 0;
					data[dataPointer]++;
					instructionPointer++;
					break;

				case '-':
					data[dataPointer] = data[dataPointer] || 0;
					data[dataPointer]--;
					instructionPointer++;
					break;

				case '.':
					output += String.fromCharCode(data[dataPointer]);
					instructionPointer++;
					break;

				case '[':
					if (data[dataPointer] === 0) {
						loopDepth = 1;
						matchFound = false;

						instructionPointer++;
						while (!matchFound) {
							instructionPointer++;

							if (program[instructionPointer] === '[') {
								loopDepth++;
							}

							else if (program[instructionPointer] === ']') {
								loopDepth--;
								if (loopDepth === 0) {
									matchFound = true;
								}
							}
						}
					}

					instructionPointer++;
					break;

				case ']':
					if (data[dataPointer] !== 0) {
						loopDepth = 1;
						matchFound = false;

						while (!matchFound) {
							instructionPointer--;

							if (program[instructionPointer] === ']') {
								loopDepth++;
							}

							else if (program[instructionPointer] === '[') {
								loopDepth--;
								if (loopDepth === 0) {
									matchFound = true;
								}
							}
						}
					}
					
					instructionPointer++;
					break;

				default:
					instructionPointer++;
					break;
			}
		}

		return output;
	}

	render() {
		var result = this.brainfuck(this.props.program);
		
		return (
			<div className='bf-element bf-output'>
				<h3>Output</h3>
				<p id='output-text'>{result}</p>
			</div>
		);
	};
}

export default BFOutput;
