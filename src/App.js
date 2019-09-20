import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';

class App extends Component {
  render() {
      const store = createStore(reducers);
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <p className="App-intro">
            Tmrz
          </p>
        </div>
      </Provider>
    );
  }
}

export default App;
