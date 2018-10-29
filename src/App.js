import React, { Component } from 'react';
import './App.css';
import ShowCanvas from './components/canvas';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ShowCanvas/>
      </div>
    );
  }
}

export default App;
