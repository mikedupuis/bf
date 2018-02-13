import React, { Component } from 'react';
import './header.css';
import logo from './logo.svg';

class Header extends Component {
	
	render() {
		return (
			<div className='header'>
				<div className='header-logo'>
					<img src={logo} className="header-logo-img" alt="logo" />
				</div>
				<div className='header-brand'>
					<p>BF Interpreter</p>
				</div>
			</div>
		);
	};
}

export default Header;
