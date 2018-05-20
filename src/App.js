import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import { Provider } from 'react-redux';
// import { changeNameStore } from './redux/stores/ChangeNameStore';
// import ContextContainer from './components/container/ContextContainer';
// import ReduxContainer from './components/container/ReduxContainer';
// import RefContainer from './components/container/RefContainer';
import CurrancyTracker from './components/container/CurrancyTracker';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React Stuff</h1>
        </header>
        {/* <ContextContainer />
        <Provider store={ changeNameStore }>
          <ReduxContainer />
        </Provider>
        <RefContainer /> */}
        <CurrancyTracker />
      </div>
    );
  }
}

export default App;
