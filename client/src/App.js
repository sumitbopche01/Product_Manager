import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import './App.css';
import Home from './containers/Home/Home';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
            <Home />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
