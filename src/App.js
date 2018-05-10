import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ContextContainer from './components/container/ContextContainer';
import ReduxContainer from './components/container/ReduxContainer';
import { Provider } from 'react-redux';
import { changeNameStore } from './redux/stores/ChangeNameStore'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <ContextContainer />
        <Provider store={ changeNameStore }>
          <ReduxContainer />
        </Provider>
      </div>
    );
  }
}

export default App;
