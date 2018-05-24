import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import InspectionContainer from './components/container/InspectionContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React Stuff</h1>
        </header>
        <InspectionContainer />
      </div>
    );
  }
}

export default App;
