import React, { Component } from 'react';
import Header from './components/header/header.js';
import Footer from './components/footer/footer.js';
import BFRunner from './components/bf-runner/bf-runner.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
	  	<Header />
		<BFRunner />
		<Footer />
      </div>
    );
  }
}

export default App;
