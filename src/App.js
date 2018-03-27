import React, { Component } from 'react';
import { Parent } from './Parent';
import { Provider } from 'react-redux';
import { store } from './store';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <Parent />
        </Provider>
      </div>
    );
  }
}

export default App;
